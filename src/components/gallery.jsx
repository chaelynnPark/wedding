import React, { useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import SectionLabel from "./sectionLabel";

import GalleryPhoto1 from "../assets/gallery_photo_1.jpg";
import GalleryPhoto2 from "../assets/gallery_photo_2.jpg";
import GalleryPhoto3 from "../assets/gallery_photo_3.jpg";
import GalleryPhoto4 from "../assets/gallery_photo_4.jpg";
import GalleryPhoto5 from "../assets/gallery_photo_5.jpg";
import GalleryPhoto6 from "../assets/gallery_photo_6.jpg";
import GalleryPhoto7 from "../assets/gallery_photo_7.jpeg";
import GalleryPhoto8 from "../assets/gallery_photo_8.jpeg";
import GalleryPhoto9 from "../assets/gallery_photo_9.jpg";
import GalleryPhoto10 from "../assets/gallery_photo_10.jpg";

const Wrapper = styled.div`
  padding-top: 96px;
  width: 88%;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
`;

const ExpandedImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  cursor: default;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
];

const SWIPE_THRESHOLD = 50;

const Gallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const currentIndexRef = useRef(0);
  const touchStartXRef = useRef(0);

  const handleSlide = (index) => {
    currentIndexRef.current = index;
  };

  const handleImageClick = () => {
    setExpandedIndex(currentIndexRef.current);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setExpandedIndex(null);
    }
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    setExpandedIndex((prev) => {
      if (prev === null) return prev;
      if (deltaX < 0) return (prev + 1) % images.length;
      return (prev - 1 + images.length) % images.length;
    });
  };

  return (
      <Wrapper>
        <SectionLabel no="02" en="GALLERY" kr="우리의 순간들" />
        <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            items={images}
            onClick={handleImageClick}
            onSlide={handleSlide}
        />
        {expandedIndex !== null && (
            <Overlay onClick={handleOverlayClick}>
              <ExpandedImg
                  src={images[expandedIndex].original}
                  alt=""
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
              />
            </Overlay>
        )}
      </Wrapper>
  );
};

export default Gallery;

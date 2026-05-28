import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import GalleryPhoto6 from "../assets/gallery_photo_6.jpg";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";
import {
  GROOM_NAME,
  BRIDE_NAME,
  WEDDING_DATE,
} from "../../config.js";

import AOS from "aos";
import "aos/dist/aos.css";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const Splash = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${GalleryPhoto6});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 12vh;
`;

const SplashNames = styled.p`
  font-family: "mom_to_daughter";
  color: #fff;
  font-size: 2.75rem;
  margin: 0 0 12px 0;
  text-align: center;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
  letter-spacing: 0.05em;
`;

const SplashDate = styled.p`
  font-family: "mom_to_daughter";
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.romoveChile(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Splash>
        <SplashNames>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </SplashNames>
        <SplashDate>{WEDDING_DATE}</SplashDate>
      </Splash>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2022 Shin Jooyoung
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;

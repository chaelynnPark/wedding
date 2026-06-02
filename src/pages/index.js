import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GalleryPhoto6 from "../assets/gallery_photo_6.jpg";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";
import {
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";

import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

const { Footer } = Layout;

const Wrapper = styled.div`
  background: var(--bg);
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  min-height: 100svh;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const Splash = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  background-color: #1f1b18;
  overflow: hidden;
  color: #fff;
`;

const SplashImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const SplashOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0) 55%,
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
`;

const Frame = styled.div`
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  pointer-events: none;
`;

const TopLabel = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.85);
`;

const BottomBlock = styled.div`
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SmallMono = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.85);
`;

const Names = styled.h1`
  font-family: "Nanum Pen Script", "Gowun Dodum", cursive;
  font-size: 3.6rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #fff;
`;

const NamesSub = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;

const DateLine = styled.div`
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;

  &::before {
    content: "";
    width: 24px;
    height: 1px;
    background: rgba(255, 255, 255, 0.7);
    display: inline-block;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: rgba(255, 255, 255, 0.85);
  animation: scrollHint 1.8s ease-in-out infinite;
`;

const StyledFooter = styled(Footer)`
  background: var(--bg) !important;
  border-top: 1px solid var(--line) !important;
  padding: 28px 24px !important;
  margin-top: 48px;
  text-align: center;
`;

const FootRow = styled.div`
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Splash>
        <SplashImage src={GalleryPhoto6} alt="" decoding="async" fetchpriority="high" />
        <SplashOverlay />
        <Frame />
        <TopLabel>
          <span>THE WEDDING</span>
          <span>N° 01</span>
        </TopLabel>
        <BottomBlock>
          <SmallMono>SAVE — THE — DATE</SmallMono>
          <div>
            <Names>
              {GROOM_NAME}
              <br />
              &amp; {BRIDE_NAME}
            </Names>
            <NamesSub>YUNKYEUM · CHAELYNN</NamesSub>
          </div>
          <DateLine>2026 . 07 . 25  SAT  PM 1:10</DateLine>
        </BottomBlock>
        <ScrollHint>SCROLL ↓</ScrollHint>
      </Splash>
      <Title />
      <Greeting />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <StyledFooter>
        <FootRow>
          <span>{GROOM_NAME} &amp; {BRIDE_NAME}</span>
          <span>2026.07.25 — 규수당 문래</span>
          <span>MADE WITH ♥</span>
        </FootRow>
      </StyledFooter>
      <Analytics />
    </Wrapper>
  );
};

export default IndexPage;

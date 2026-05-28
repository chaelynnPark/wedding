import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1779717992374",
    "key" : "ozp4p6iy3j3",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
          c +
          "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
          a +
          "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
      <Wrapper>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>오시는 길</Title>
        </Divider>
        <Image src={Flower} />
        <Map
            id="daumRoughmapContainer1779717992374"
            className="root_daum_roughmap root_daum_roughmap_landing"
        ></Map>
        <Content>
          [주소]
          <br />
          서울 영등포구 문래동3가 55-16
          <br />
          SK리더스뷰 2층 규수당
          <br />
          <br />
          <Title>버스 이용시</Title>
          <br />
          [간선버스] 641
          [지선버스] 62112, 6516, 6625
          [마을버스] 영등포05, 영등포12
          문래역 하차
          <br />
          <br />
          <Title>지하철 이용시</Title>
          <br />
          2호선 문래역 하차
          [도보] 5번 출구 전방 직진 300M
          <br />
          [셔틀버스] 4번출구(뒷쪽) 셔틀버스 운행
          <br />
          [자차 이용시]
          네비게이션: 규수당 문래점 또는 문래동 SK리더스뷰 검색
          [주소검색]
          서울 영등포구 문래로 164
          서울 영등포구 문래동3가 55-16
        </Content>
      </Wrapper>
  );
};

export default Location;

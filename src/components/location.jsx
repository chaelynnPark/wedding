import React, { useEffect } from "react";
import styled from "styled-components";
import SectionLabel from "./sectionLabel";

const Wrapper = styled.div`
  padding-top: 96px;
  width: 88%;
  margin: 0 auto;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 24px;
`;

const AddressBlock = styled.div`
  border-top: 1px solid var(--line);
  padding: 20px 0;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  padding: 10px 0;
  font-size: 0.95rem;
  line-height: 1.7;
  border-bottom: 1px solid var(--line);

  &:last-child {
    border-bottom: none;
  }
`;

const Key = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--accent);
  padding-top: 4px;
`;

const Val = styled.div`
  color: var(--ink-soft);
`;

const Strong = styled.div`
  color: var(--ink);
  font-weight: 500;
  margin-bottom: 4px;
`;

const Location = () => {
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
      <SectionLabel no="03" en="LOCATION" kr="오시는 길" />
      <Map
        id="daumRoughmapContainer1779717992374"
        className="root_daum_roughmap root_daum_roughmap_landing"
      />
      <AddressBlock>
        <Row>
          <Key>VENUE</Key>
          <Val>
            <Strong>규수당 문래</Strong>
            SK리더스뷰 2층
          </Val>
        </Row>
        <Row>
          <Key>ADDRESS</Key>
          <Val>
            서울 영등포구 문래로 164<br />
            (문래동3가 55-16)
          </Val>
        </Row>
        <Row>
          <Key>SUBWAY</Key>
          <Val>
            <Strong>2호선 문래역</Strong>
            5번 출구 직진 300m<br />
            4번 출구(뒷쪽) 셔틀버스 운행
          </Val>
        </Row>
        <Row>
          <Key>BUS</Key>
          <Val>
            <Strong>문래역 하차</Strong>
            간선 641 · 지선 6212 6516 6625<br />
            마을 영등포05 · 영등포12
          </Val>
        </Row>
        <Row>
          <Key>CAR</Key>
          <Val>
            네비게이션 검색<br />
            "규수당 문래점" 또는 "문래동 SK리더스뷰"
          </Val>
        </Row>
      </AddressBlock>
    </Wrapper>
  );
};

export default Location;

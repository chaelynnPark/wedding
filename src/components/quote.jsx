import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 96px 0 64px;
  width: 88%;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  padding: 36px 24px 28px;
  background: #fff;
  border: 1px solid var(--line);
`;

const QuoteMark = styled.span`
  position: absolute;
  top: -18px;
  left: 16px;
  background: var(--bg);
  padding: 0 10px;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
`;

const Body = styled.p`
  font-size: 1.05rem;
  line-height: 2;
  color: var(--ink);
  margin: 0;
  text-align: center;
  font-weight: 400;
`;

const Author = styled.div`
  margin-top: 20px;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  text-align: center;
`;

const Quote = () => (
  <Wrapper>
    <Card data-aos="fade-up">
      <QuoteMark>QUOTE</QuoteMark>
      <Body>
        인생은 모두가
        <br />
        함께 하는 여행이다.
        <br />
        매일매일 사는 동안
        <br />
        우리가 할 수 있는 건
        <br />
        최선을 다해
        <br />
        이 멋진 여행을 만끽하는 것이다.
      </Body>
      <Author>— 영화, 어바웃타임 —</Author>
    </Card>
  </Wrapper>
);

export default Quote;

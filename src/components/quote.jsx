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
                장담하건대,
                <br />
                세상이 다 겨울이어도
                <br />
                우리 사랑은 늘 봄처럼 따뜻하고
                <br />
                간혹, 여름처럼 뜨거울 겁니다.
            </Body>
            <Author>— 이수동, 사랑가 —</Author>
        </Card>
    </Wrapper>
);

export default Quote;

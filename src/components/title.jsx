import React from "react";
import styled from "styled-components";
import {
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";

const Layout = styled.div`
  width: 88%;
  margin: 0 auto;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const TopMono = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  color: var(--accent);
`;

const Names = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.01em;
  text-align: center;
  line-height: 1.4;
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid var(--line);
  background: #fff;
  padding: 24px 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  font-size: 0.75rem;
  text-align: center;
  color: var(--ink-soft);
`;

const DayHead = styled.span`
  color: var(--ink-mute);
  font-size: 0.65rem;
  letter-spacing: 0.1em;

  &:first-child { color: #c98a92; }
`;

const Day = styled.span`
  padding: 4px 0;
`;

const Highlight = styled(Day)`
  background: var(--accent);
  color: #fff;
  border-radius: 999px;
  font-weight: 500;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
`;

const Divider = styled.span`
  display: inline-block;
  width: 24px;
  height: 1px;
  background: var(--line);
`;

const Title = () => {
  // 2026-07-25 is Saturday. July 2026 starts on Wednesday.
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const leading = 3; // empty cells before July 1 (Wed)
  return (
    <Layout data-aos="fade-up">
      <TopMono>2026 · WEDDING DAY</TopMono>
      <Names>
        {GROOM_NAME} <span style={{ color: "var(--ink-mute)" }}>&amp;</span> {BRIDE_NAME}
      </Names>
      <Card>
        {days.map((d, i) => (
          <DayHead key={`h${i}`}>{d}</DayHead>
        ))}
        {Array.from({ length: leading }).map((_, i) => (
          <Day key={`e${i}`} />
        ))}
        {Array.from({ length: 31 }).map((_, i) => {
          const n = i + 1;
          if (n === 25) return <Highlight key={n}>{n}</Highlight>;
          return <Day key={n}>{n}</Day>;
        })}
      </Card>
      <Meta>
        <span>2026 . 07 . 25  SAT</span>
        <Divider />
        <span>PM 01 : 10</span>
        <Divider />
        <span>{WEDDING_LOCATION.toUpperCase()}</span>
      </Meta>
    </Layout>
  );
};

export default Title;

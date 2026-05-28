import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin: 0 0 28px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Num = styled.span`
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.08em;
`;

const Dash = styled.span`
  flex: 1;
  height: 1px;
  background: var(--line);
`;

const Title = styled.h2`
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--ink);
`;

const Kor = styled.span`
  font-size: 0.78rem;
  color: var(--ink-mute);
  margin-left: 8px;
  letter-spacing: 0.02em;
`;

const SectionLabel = ({ no, en, kr }) => (
  <Wrap>
    <Row>
      <Num>{no} —</Num>
      <Num>{en}</Num>
      <Dash />
    </Row>
    <Title>
      {kr}
    </Title>
  </Wrap>
);

export default SectionLabel;

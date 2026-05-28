import React from "react";
import styled from "styled-components";
import SectionLabel from "./sectionLabel";
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 96px;
  margin: 0 auto;
  width: 88%;
`;

const Content = styled.p`
  font-size: 1.05rem;
  line-height: 2.1;
  color: var(--ink-soft);
  margin: 24px 0 40px 0;
  width: 100%;
  text-align: center;
  font-weight: 400;
`;

const FamilyCard = styled.div`
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FamilyRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto;
  align-items: baseline;
  gap: 14px;
  font-size: 0.95rem;
`;

const RoleTag = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--accent);
`;

const Parents = styled.span`
  color: var(--ink-mute);
  font-size: 0.88rem;
`;

const Name = styled.span`
  font-weight: 600;
  color: var(--ink);
`;

const Greeting = () => {
  return (
    <Wrapper>
      <SectionLabel no="01" en="INVITATION" kr="초대합니다" />
      <Content data-aos="fade-up">
        오랜시간 함께하며
        <br />
        서로에게 가장 소중한 사람이 되었습니다.
        <br />
        <br />
        앞으로도 서로의 쉼이 되어
        <br />
        함께 살아가려 합니다.
        <br />
        <br />
        귀한 걸음 하시어 저희의 시작을
        <br />
        따뜻하게 축복해 주세요.
      </Content>
      <FamilyCard data-aos="fade-up">
        <FamilyRow>
          <RoleTag>GROOM</RoleTag>
          <Parents>
            {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남
          </Parents>
          <Name>{GROOM_NAME}</Name>
        </FamilyRow>
        <FamilyRow>
          <RoleTag>BRIDE</RoleTag>
          <Parents>
            {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀
          </Parents>
          <Name>{BRIDE_NAME}</Name>
        </FamilyRow>
      </FamilyCard>
    </Wrapper>
  );
};

export default Greeting;

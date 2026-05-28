import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import SectionLabel from "./sectionLabel";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 96px;
  width: 88%;
  margin: 0 auto;
`;

const Hint = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--ink-soft);
  margin: 0 0 28px 0;
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SideButton = styled.button`
  appearance: none;
  background: #fff;
  border: 1px solid var(--line);
  padding: 18px 20px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s, background 0.2s;

  &:hover { border-color: var(--accent); }
`;

const ButtonLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SideTag = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--accent);
`;

const SideLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--ink);
`;

const Arrow = styled.span`
  color: var(--ink-mute);
`;

const ModalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid var(--line);

  &:last-child { border-bottom: none; }
`;

const PersonName = styled.span`
  font-size: 0.95rem;
  color: var(--ink);
  font-weight: 500;
`;

const PersonRole = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--ink-mute);
  margin-right: 8px;
`;

const ModalHint = styled.p`
  font-size: 0.75rem;
  color: var(--ink-mute);
  margin: 0;
  text-align: center;
`;

const AccountRow = ({ role, name, account }) => (
  <ModalRow>
    <span>
      <PersonRole>{role}</PersonRole>
      <PersonName>{name}</PersonName>
    </span>
    <CopyToClipboard text={account}>
      <Button
        type="text"
        style={{ padding: 0, fontSize: "0.85rem", color: "#5a5a5a" }}
        onClick={() => message.success("계좌번호가 복사되었습니다.")}
      >
        {account} ⧉
      </Button>
    </CopyToClipboard>
  </ModalRow>
);

const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <SectionLabel no="04" en="ACCOUNT" kr="마음 전하실 곳" />
      <Hint data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해보세요.
      </Hint>

      <ButtonWrap>
        <SideButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          <ButtonLeft>
            <SideTag>GROOM SIDE</SideTag>
            <SideLabel>신랑측 계좌번호 보기</SideLabel>
          </ButtonLeft>
          <Arrow>→</Arrow>
        </SideButton>
        <SideButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
          <ButtonLeft>
            <SideTag>BRIDE SIDE</SideTag>
            <SideLabel>신부측 계좌번호 보기</SideLabel>
          </ButtonLeft>
          <Arrow>→</Arrow>
        </SideButton>
      </ButtonWrap>

      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        footer={[
          <ModalHint key="hint">
            계좌번호 클릭시 클립보드로 복사됩니다.
          </ModalHint>,
        ]}
      >
        <AccountRow role="GROOM" name={GROOM_NAME} account={GROOM_ACCOUNT_NUMBER} />
        <AccountRow role="父" name={GROOM_FATHER_NAME} account={GROOM_FATHER_ACCOUNT_NUMBER} />
        <AccountRow role="母" name={GROOM_MOTHER_NAME} account={GROOM_MOTHER_ACCOUNT_NUMBER} />
      </Modal>

      <Modal
        title={<b>신부측 계좌번호</b>}
        visible={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        footer={[
          <ModalHint key="hint">
            계좌번호 클릭시 클립보드로 복사됩니다.
          </ModalHint>,
        ]}
      >
        <AccountRow role="BRIDE" name={BRIDE_NAME} account={BRIDE_ACCOUNT_NUMBER} />
        <AccountRow role="父" name={BRIDE_FATHER_NAME} account={BRIDE_FATHER_ACCOUNT_NUMBER} />
        <AccountRow role="母" name={BRIDE_MOTHER_NAME} account={BRIDE_MOTHER_ACCOUNT_NUMBER} />
      </Modal>
    </Wrapper>
  );
};

export default CongratulatoryMoney;

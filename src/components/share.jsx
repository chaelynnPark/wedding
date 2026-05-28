import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";
import SectionLabel from "./sectionLabel";

import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 96px;
  padding-bottom: 32px;
  width: 88%;
  margin: 0 auto;
`;

const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BaseButton = styled(Button)`
  height: 52px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-weight: 500 !important;
  border-radius: 0 !important;
`;

const KakaoButton = styled(BaseButton)`
  background: #fee500 !important;
  border-color: #fee500 !important;
  color: #181600 !important;
  &:hover, &:focus {
    background-color: #ffd900 !important;
    border-color: #ffd900 !important;
    color: #181600 !important;
  }
`;

const LinkButton = styled(BaseButton)`
  background: #fff !important;
  border-color: var(--line) !important;
  color: var(--ink) !important;
  &:hover, &:focus {
    background-color: #fff !important;
    border-color: var(--accent) !important;
    color: var(--ink) !important;
  }
`;

const Share = () => {
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(KAKAOTALK_API_TOKEN);
      }
      kakao.Link.createDefaultButton({
        objectType: "feed",
        container: "#sendKakao",
        content: {
          title: `${GROOM_NAME} ❤ ${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
        installTalk: true,
      });

      setTimeout(() => {
        document.getElementById("sendKakao")?.click();
        message.success("카카오톡으로 청첩장을 공유합니다!");
      }, 100);
    }
  };

  return (
    <Wrapper>
      <SectionLabel no="05" en="SHARE" kr="청첩장 공유하기" />
      <ButtonStack>
        <KakaoButton
          icon={<MessageFilled />}
          id="sendKakao"
          size="large"
          onClick={createKakaoButton}
        >
          카카오톡으로 공유
        </KakaoButton>
        <CopyToClipboard text={WEDDING_INVITATION_URL}>
          <LinkButton
            icon={<LinkOutlined />}
            size="large"
            onClick={() => message.success("청첩장 링크가 복사되었습니다.")}
          >
            링크 복사하기
          </LinkButton>
        </CopyToClipboard>
      </ButtonStack>
    </Wrapper>
  );
};

export default Share;

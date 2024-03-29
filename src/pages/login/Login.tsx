import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { KakaoButton } from "@/components/common/Buttons/IconButton";
import NormalButton from "@/components/common/Buttons/NormalButton";
import Spacing from "@/components/common/Spacing";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import useAuthStore from "@/store/AuthStore";
import CafeSvg from "@/assets/images/cafe.svg";

export type Provider = "NAVER" | "KAKAO";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const navigate = useNavigate();
  const setProvider = useAuthStore((state) => state.setProvider);

  const handleMoveToAuthProvider = async (provider: Provider) => {
    window.location.assign(`${BASE_URL}/v1/oauth2.0/${provider}`);
    setProvider(provider);
  };
  const handleMoveToAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <StyledLoginOuterWrapper>
      <StyledLoginContainer>
        <Spacing size={50} />
        <img
          src={CafeSvg}
          alt={"coffee-meet-logo"}
          width={250}
        />
        <Spacing
          size={45}
          css={css`
            @media (max-width: 375px) {
              height: ${45 * 0.75}px;
            }
          `}
        />
        <StyledHeaderText
          font={"Body_24"}
          fontWeight={700}
          letterSpacing={-1}
        >
          {"COFFEE MEET"}
        </StyledHeaderText>
        <Spacing
          size={30}
          css={css`
            @media (max-width: 375px) {
              height: ${50 * 0.75}px;
            }
          `}
        />
        <StyledAdminLoginBtn onClick={handleMoveToAdminLogin}>
          <NormalButton normalButtonType={"nickname-duplicate"}>{"관리자 로그인"}</NormalButton>
        </StyledAdminLoginBtn>
        <StyledSubText
          font={"Body_16"}
          fontWeight={500}
          letterSpacing={-1}
        >
          {"회사의 경계를 넘어, "}
        </StyledSubText>
        <Spacing
          size={10}
          css={css`
            @media (max-width: 375px) {
              height: ${10 * 0.75}px;
            }
          `}
        />
        <StyledSubText
          font={"Body_16"}
          fontWeight={500}
          letterSpacing={-1}
        >
          {" 새로운 대화의 세계를 탐험하세요!"}
        </StyledSubText>
        <Spacing
          size={50}
          css={css`
            @media (max-width: 375px) {
              height: ${80 * 0.75}px;
            }
          `}
        />
        <StyledOauthWrapper>
          {/* 네이버 로그인 승인 될 때까지 버튼 은닉 */}
          {/*<NaverButton*/}
          {/*  moveToOAuthProvider={() => {*/}
          {/*    handleMoveToAuthProvider("NAVER");*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<Spacing*/}
          {/*  size={16}*/}
          {/*  css={css`*/}
          {/*    @media (max-width: 375px) {*/}
          {/*      height: ${16 * 0.75}px;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*/>*/}
          <KakaoButton
            moveToOAuthProvider={() => {
              handleMoveToAuthProvider("KAKAO");
            }}
          />
        </StyledOauthWrapper>
      </StyledLoginContainer>
    </StyledLoginOuterWrapper>
  );
};

const StyledLoginOuterWrapper = styled.div`
  background-color: ${palette.SKY_BLUE};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledOauthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLoginContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${palette.WHITE};
  border-radius: 20px;
  text-align: center;
  padding-bottom: 10%;
`;

const StyledHeaderText = styled(Text)`
  @media (max-width: 280px) {
    font-size: 24px;
  }
`;

const StyledSubText = styled(Text)`
  @media (max-width: 280px) {
    font-size: 14px;
  }
`;
const StyledAdminLoginBtn = styled.div`
  position: absolute;
  cursor: pointer;
  opacity: 0;
`;
export default Login;

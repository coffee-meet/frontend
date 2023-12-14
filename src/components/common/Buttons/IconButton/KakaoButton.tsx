import styled from "@emotion/styled";
import type { OAuthButtonProps } from "@/components/common/Buttons/IconButton";
import { StyledIconWrapper } from "@/components/common/Buttons/IconButton";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import KakaoIcon from "@/assets/icons/KakaoIcon";

const KakaoButton = ({ moveToOAuthProvider }: OAuthButtonProps) => (
  <StyledButtonWrapper
    buttonTheme={"kakao"}
    onClick={moveToOAuthProvider}
  >
    <StyledIconWrapper>
      <KakaoIcon
        width={48}
        height={48}
        iconWidth={30}
        iconHeight={30}
        borderRadius={10}
      />
    </StyledIconWrapper>
    <StyledButtonText
      font={"Body_16"}
      fontWeight={600}
      letterSpacing={-1}
      style={{ flex: 1, textAlign: "left", marginLeft: 20 }}
    >
      {"카카오톡으로 시작"}
    </StyledButtonText>
  </StyledButtonWrapper>
);

export const StyledButtonWrapper = styled.button<{
  buttonTheme: "kakao" | "naver";
  onClick: () => void;
}>`
  width: 300px;
  height: 50px;
  background-color: ${(props) => (props.buttonTheme === "naver" ? palette.GREEN : palette.YELLOW)};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 280px) {
    width: 250px;
  }
`;

export const StyledButtonText = styled(Text)`
  @media (max-width: 280px) {
    font-size: 16px;
  }
  color: ${palette.BLACK};
`;

export default KakaoButton;

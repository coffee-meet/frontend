import type { OAuthButtonProps } from "@/components/common/Buttons/IconButton";
import { StyledIconWrapper } from "@/components/common/Buttons/IconButton";
import {
  StyledButtonText,
  StyledButtonWrapper,
} from "@/components/common/Buttons/IconButton/KakaoButton";
import { palette } from "@/styles/palette";
import NaverIcon from "@/assets/icons/NaverIcon";

const NaverButton = ({ moveToOAuthProvider }: OAuthButtonProps) => {
  return (
    <StyledButtonWrapper
      buttonTheme={"naver"}
      onClick={moveToOAuthProvider}
    >
      <StyledIconWrapper>
        <NaverIcon
          width={48}
          height={48}
          iconWidth={18}
          iconHeight={18}
          borderRadius={10}
        />
      </StyledIconWrapper>
      <StyledButtonText
        font={"Body_16"}
        fontWeight={600}
        letterSpacing={-1}
        style={{
          flex: 1,
          textAlign: "left",
          color: palette.WHITE,
          marginLeft: 20,
        }}
      >
        {"네이버로 시작"}
      </StyledButtonText>
    </StyledButtonWrapper>
  );
};

export default NaverButton;

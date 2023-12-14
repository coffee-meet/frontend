import styled from "@emotion/styled";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import AvatarGroup from "./AvatarGroup";

const StyledWatingTopWrapper = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StyledWatingTopTextWrapper = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: flex-end;
`;

type CardHeaderProps = {
  totalMemberLen: number;
  currentMemberLen: number;
  isDarkMode: boolean;
};

const CardHeader = ({ totalMemberLen, currentMemberLen, isDarkMode }: CardHeaderProps) => {
  return (
    <StyledWatingTopWrapper>
      <StyledWatingTopTextWrapper>
        <Text
          font={"Body_32"}
          fontWeight={400}
          letterSpacing={2}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.DARK_BLUE,
          }}
        >
          {currentMemberLen}
        </Text>
        <Text
          font={"Body_24"}
          fontWeight={400}
          letterSpacing={2}
          style={{
            color: isDarkMode ? palette.GRAY300 : palette.GRAY600,
          }}
        >
          {`/${totalMemberLen}`}
        </Text>
      </StyledWatingTopTextWrapper>
      <AvatarGroup avatarList={["", "", ""]} />
    </StyledWatingTopWrapper>
  );
};

export default CardHeader;

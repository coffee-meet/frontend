import { PulseLoader } from "react-spinners";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";
import NormalButton from "../common/Buttons/NormalButton";
import Spacing from "../common/Spacing";
import { Text } from "../common/Text";

const StyledWatingMidWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

type CardMiddleProps = {
  time: number;
  handleResetClick: () => void;
  isDarkMode: boolean;
};

const CardMiddle = ({ time, handleResetClick, isDarkMode }: CardMiddleProps) => {
  return (
    <StyledWatingMidWrapper>
      <Text
        font={"Body_32"}
        fontWeight={600}
        letterSpacing={0}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: isDarkMode ? palette.DARK_WHITE : palette.DARK_BLUE,
        }}
      >
        {formatTime(time)}
      </Text>
      <Spacing size={18} />
      <NormalButton
        normalButtonType={"matching"}
        onClick={handleResetClick}
      >
        {"매칭 취소"}
      </NormalButton>
      <Spacing size={31} />
      <Text
        font={"Body_14"}
        fontWeight={400}
        letterSpacing={-1}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: isDarkMode ? palette.DARK_WHITE : palette.DARK_BLUE,
        }}
      >
        {"매칭 중"}&nbsp;&nbsp;&nbsp;
        <PulseLoader
          size={3}
          speedMultiplier={0.5}
          color={isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`}
          cssOverride={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </Text>
    </StyledWatingMidWrapper>
  );
};

export default CardMiddle;

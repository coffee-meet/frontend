import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { timer } from "d3";
import AvatarGroup from "@/pages/home/components/AvatarGroup.tsx";
import Spacing from "@/components/common/Spacing";
import { Text, TextWrapper } from "@/components/common/Text";
import { palette } from "@/styles/palette";

type ChatRoomBubbleProps = {
  title: string;
  participants: string[];
  createdAt: string;
  isDarkMode: boolean;
};

const ChatRoomBubble = ({ title, participants, createdAt, isDarkMode }: ChatRoomBubbleProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const createdTime = new Date(new Date(createdAt).getTime() + 24 * 60 * 60 * 1000);

    const updateTimer = () => {
      const currentTime = new Date();
      const timeDifference = createdTime.getTime() - currentTime.getTime();

      if (timeDifference > 0) {
        const leftHours = String(Math.floor(timeDifference / (1000 * 60 * 60))).padStart(2, "0");
        const leftMinutes = String(
          Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        ).padStart(2, "0");
        const leftSeconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(
          2,
          "0",
        );
        setTimeRemaining({ hours: leftHours, minutes: leftMinutes, seconds: leftSeconds });
      } else {
        timerInstance.stop();
        setTimeRemaining({ hours: "00", minutes: "00", seconds: "00" });
      }
    };

    const timerInstance = timer(updateTimer);

    return () => timerInstance.stop();
  }, []);

  return (
    <StyledChatRoomBubble isDarkMode={isDarkMode}>
      <Text
        font={"Body_16"}
        fontWeight={600}
        letterSpacing={-1}
        style={{
          color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
          padding: "15% 2% 0",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Spacing size={30} />
      <AvatarGroup
        avatarList={["", "", ""]}
        avatarWidth={17}
        avatarHeight={17}
        style={{
          position: "absolute",
          top: "70px",
          right: "10px",
        }}
      />
      <StyledAvatarGroupWrapper>
        <StyledChatRoomBubbleTextWrapper
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 10px",
          }}
        >
          <Text
            font={"Body_12"}
            fontWeight={500}
            letterSpacing={-1}
            style={{
              color: isDarkMode ? palette.DARK_WHITE : palette.GRAY600,
              display: "inline-flex",
            }}
          >
            {"참여자"}
          </Text>
          <StyledChatRoomBubbleParticipantsWrapper>
            {participants.map((participant, index) => {
              return (
                <Text
                  key={index}
                  font={"Body_12"}
                  fontWeight={500}
                  letterSpacing={-1}
                  style={{
                    color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
                  }}
                >
                  {participant}
                  {index !== participants.length - 1 && ", "}
                </Text>
              );
            })}
          </StyledChatRoomBubbleParticipantsWrapper>
        </StyledChatRoomBubbleTextWrapper>
        <Spacing size={4} />
        <StyledChatRoomBubbleTextWrapper>
          <Text
            font={"Body_12"}
            fontWeight={500}
            letterSpacing={-1}
            style={{
              color: isDarkMode ? palette.DARK_WHITE : palette.GRAY600,
              display: "inline-flex",
            }}
          >
            {"남은시간"}
          </Text>
          <Text
            font={"Body_12"}
            fontWeight={500}
            letterSpacing={-1}
            style={{
              color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
            }}
          >{`${timeRemaining.hours}시간 ${timeRemaining.minutes}분 ${timeRemaining.seconds}초`}</Text>
        </StyledChatRoomBubbleTextWrapper>
      </StyledAvatarGroupWrapper>
    </StyledChatRoomBubble>
  );
};

const StyledChatRoomBubble = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 161px;
  height: 161px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  border-radius: 20px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  cursor: pointer;
`;

const StyledAvatarGroupWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const StyledChatRoomBubbleTextWrapper = styled(TextWrapper)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledChatRoomBubbleParticipantsWrapper = styled(TextWrapper)`
  flex-direction: row;
  justify-content: flex-end;
  max-width: 80px;
  flex-wrap: wrap;
  row-gap: 3px;
`;

export default ChatRoomBubble;

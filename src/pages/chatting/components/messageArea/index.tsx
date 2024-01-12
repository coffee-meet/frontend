import styled from "@emotion/styled";
import { useQueryClient } from "@tanstack/react-query";
import type { Messages } from "@/apis/chatting/chattingType";
import type { MyProfileData } from "@/apis/profile/type.ts";
import ChatBubbleListLow from "@/pages/chatting/components/chatBubbleListLow";
import { FlexBox } from "@/components/common/Flexbox";
import Spacing from "@/components/common/Spacing";
import ChattingBubble from "@/components/common/chattingBubble";

interface MessageProps {
  messageData: Messages[];
}

const MessageArea = ({ messageData }: MessageProps) => {
  const queryClient = useQueryClient();
  const nickname = queryClient.getQueryData<MyProfileData>(["myProfileData"])?.nickname;
  return (
    <>
      <FlexBox
        direction={"column"}
        gap={20}
        fullWidth={true}
      >
        <Spacing size={5} />
        {messageData &&
          messageData.map((message, i) =>
            //로그인 성공 후 nickname 전역에 저장하면 내 닉네임 불러오기
            message.nickname == nickname ? (
              <StyleChattingBubbleWrapper
                key={i}
                isMyChat={true}
              >
                <ChattingBubble
                  isMyChat={true}
                  message={message.content}
                  userId={message.userId}
                  userProfile={message.profileImageUrl}
                  time={message.createdAt}
                />
              </StyleChattingBubbleWrapper>
            ) : (
              <StyleChattingBubbleWrapper
                key={i}
                isMyChat={false}
              >
                <ChatBubbleListLow
                  fullWidth={true}
                  leftImage={message.profileImageUrl ? message.profileImageUrl : ""}
                  mainText={message.nickname}
                  userId={message.userId}
                  profileImageUrl={message.profileImageUrl ? message.profileImageUrl : ""}
                  subElement={
                    <ChattingBubble
                      message={message.content}
                      userId={message.userId}
                      userProfile={message.profileImageUrl ? message.profileImageUrl : ""}
                      time={message.createdAt}
                    ></ChattingBubble>
                  }
                  rightElement={null}
                />
              </StyleChattingBubbleWrapper>
            ),
          )}
        <Spacing size={0} />
      </FlexBox>
    </>
  );
};

const StyleChattingBubbleWrapper = styled.div<{ isMyChat: boolean }>`
  width: 97%;
  margin-left: ${(props) => (props.isMyChat ? "" : "15px")};
  /* padding-left: ${(props) => props.isMyChat && "10%"};
  padding-right: ${(props) => !props.isMyChat && "10%"}; */
`;
export default MessageArea;

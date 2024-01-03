import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ChatRoomBubble from "./ChatRoomBubble";

const StyledChatRoomBubbleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 25% 5% 5%;
  gap: 30px;
  row-gap: 50px;

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
    padding: 30% 5% 5%;
  }
`;
const ChatRoomBubbleWrapper = styled.span``;
type ChatRoom = {
  roomId: number;
  roomName: string;
  users: string[];
  createdAt: string;
};

type ChatRoomBubblesProps = {
  chatRoomList: ChatRoom[];
  isDarkMode: boolean;
};

const ChatRoomBubbles = ({ chatRoomList, isDarkMode }: ChatRoomBubblesProps) => {
  const navigate = useNavigate();
  return (
    <StyledChatRoomBubbleWrapper>
      {chatRoomList.map((chatRoom, idx) => {
        return (
          <ChatRoomBubbleWrapper
            key={idx}
            onClick={() => {
              navigate("/chat-list-detail", { state: { chatroomId: chatRoom.roomId } });
            }}
          >
            <ChatRoomBubble
              title={chatRoom.roomName}
              participants={chatRoom.users}
              createdAt={chatRoom.createdAt}
              isDarkMode={isDarkMode}
            />
          </ChatRoomBubbleWrapper>
        );
      })}
    </StyledChatRoomBubbleWrapper>
  );
};

export default ChatRoomBubbles;

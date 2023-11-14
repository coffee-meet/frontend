import styled from '@emotion/styled'

import ChatRoomBubble from './ChatRoomBubble'

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
`

type ChatRoom = {
  title: string
  participants: string[]
  createdAt: string
}

type ChatRoomBubblesProps = {
  chatRoomList: ChatRoom[]
  isDarkMode: boolean
}

const ChatRoomBubbles = ({ chatRoomList, isDarkMode }: ChatRoomBubblesProps) => {
  return (
    <StyledChatRoomBubbleWrapper>
      {chatRoomList.map((chatRoom, idx) => {
        return (
          <ChatRoomBubble
            key={idx}
            title={chatRoom.title}
            participants={chatRoom.participants}
            createdAt={chatRoom.createdAt}
            isDarkMode={isDarkMode}
          />
        )
      })}
    </StyledChatRoomBubbleWrapper>
  )
}

export default ChatRoomBubbles

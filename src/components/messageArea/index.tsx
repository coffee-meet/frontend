import styled from '@emotion/styled'

import { Messages } from '@/apis/chatting/chattingType'
import ChattingBubble from '@/components/common/chattingBubble'
import { FlexBox } from '@/components/common/Flexbox'
// import AdminListRow from '@/components/common/ListRow/AdminListRow'
import Spacing from '@/components/common/Spacing'

interface MessageProps {
  messageData: Messages[]
}
const MessageArea = ({ messageData }: MessageProps) => {
  return (
    <>
      <FlexBox direction={'column'} gap={20} fullWidth={true}>
        <Spacing size={20} />
        {messageData.map((message, i) => (
          <StyleChattingBubbleWrapper key={i} isMyChat={false}>
            <ChattingBubble isMyChat={true} message={message.content} time={'15:44'} />
          </StyleChattingBubbleWrapper>
        ))}
        <Spacing size={20} />
      </FlexBox>
    </>
  )
}

const StyleChattingBubbleWrapper = styled.div<{ isMyChat: boolean }>`
  width: 100%;
  /* padding-left: ${(props) => props.isMyChat && '10%'};
  padding-right: ${(props) => !props.isMyChat && '10%'}; */
`
export default MessageArea

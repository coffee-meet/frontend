import styled from '@emotion/styled'
import { ComponentProps } from 'react'

import { ChattingText } from '@/components/common/ChattingText'
import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { type KeyOfPalette, type KeyOfTypo } from '@/styles/theme'

interface ChattingBubbleProps extends ComponentProps<'div'> {
  isMyChat?: boolean
  message: string
  userId: string
  userProfile: string
  time: string
  messageTypo?: KeyOfTypo
  messageColor?: KeyOfPalette
  timeTypo?: KeyOfTypo
  timeColor?: KeyOfPalette
  color?: KeyOfPalette
}

/**
 * @param isMychat : 내 채팅인지, 상대방의 채팅인지 여부 / 기본 : false
 * @param message : 메시지 내용
 * @param time : 메시지 작성 시간
 * @param messageType : message에 적용할 typo
 * @param messageColor: message에 적용시킬 color
 * @param timeType : time에 적용할 typo
 * @param timeColor : time에 적용할 color
 */

const ChattingBubble = ({
  isMyChat = false,
  message,
  time,
  userId,
  userProfile,
  messageTypo = 'Body_12',
  messageColor = 'BLACK',
  timeTypo = 'Caption_11',
  timeColor = 'GRAY500',
  ...props
}: ChattingBubbleProps) => {
  const date = new Date(time)
  date.setHours(date.getHours() + 9)
  const format = date.toLocaleString().toString().slice(-10)

  const hourAndMinute = format.slice(-10).slice(0, 7)
  return (
    <BubbleContainer
      justify={'flex-start'}
      gap={10}
      fullWidth={true}
      isMyChat={isMyChat}
      messageLength={message.length > 17}
      {...props}
    >
      <StyledText isMyChat={isMyChat}>
        <MessageText typo={messageTypo} color={messageColor} {...props}>
          {message}
        </MessageText>
      </StyledText>
      <TimeText typo={timeTypo} color={timeColor} {...props}>
        {hourAndMinute}
      </TimeText>
    </BubbleContainer>
  )
}

const BubbleContainer = styled(FlexBox)<{ isMyChat: boolean; messageLength: boolean }>`
  justify-content: ${(props) => props.isMyChat && 'flex-end'};
`

const StyledText = styled.div<{
  isMyChat: boolean
}>`
  border-radius: 10px;
  background-color: ${palette.WHITE};
  padding: 6px 8px;
  word-wrap: break-word;
  order: ${(props) => (props.isMyChat ? '2' : '1')};
  margin-right: ${(props) => (props.isMyChat ? '12px' : '0px')};
  margin-left: ${(props) => (props.isMyChat ? '0px' : '5px')};
`

const TimeText = styled(ChattingText)`
  order: 1;
  line-height: 150%;
  font-family: '200';
`

const MessageText = styled(ChattingText)`
  line-height: 150%;
`

export default ChattingBubble

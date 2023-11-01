import styled from '@emotion/styled'
import { ComponentProps } from 'react'

import { ChattingText } from '@/components/common/ChattingText'
import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { type KeyOfPalette, type KeyOfTypo } from '@/styles/theme'

interface ChattingBubbleProps extends ComponentProps<'div'> {
  isMyChat?: boolean
  message: string
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
  messageTypo = 'Body_12',
  messageColor = 'BLACK',
  timeTypo = 'Caption_11',
  timeColor = 'GRAY500',
  ...props
}: ChattingBubbleProps) => {
  return (
    <BubbleContainer
      justify={'flex-start'}
      gap={10}
      fullWidth={true}
      isMyChat={isMyChat}
      {...props}
    >
      <StyledText isMyChat={isMyChat}>
        <MessageText typo={'Body_20'} color={messageColor} {...props}>
          {message}
        </MessageText>
      </StyledText>
      <TimeText typo={'Body_20'} color={timeColor} {...props}>
        {time}
      </TimeText>
    </BubbleContainer>
  )
}

const BubbleContainer = styled(FlexBox)<{ isMyChat: boolean }>`
  justify-content: ${(props) => props.isMyChat && 'flex-end'};
`

const StyledText = styled.div<{
  isMyChat: boolean
}>`
  border-radius: 10px;
  background-color: ${palette.WHITE};
  padding: 7px 12px;
  word-wrap: break-word;
  order: ${(props) => (props.isMyChat ? '2' : '1')};
`

const TimeText = styled(ChattingText)`
  order: 1;
  line-height: 150%;
`

const MessageText = styled(ChattingText)`
  line-height: 150%;
`

export default ChattingBubble
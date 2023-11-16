import styled from '@emotion/styled'
import { ComponentProps } from 'react'

import { ChattingText } from '@/components/common/ChattingText'
import { FlexBox } from '@/components/common/Flexbox'
import { KeyOfPalette, KeyOfTypo, theme } from '@/styles/theme'

export interface DateTimeProps extends ComponentProps<'div'> {
  typo?: KeyOfTypo
  color?: KeyOfPalette
  backgroundColor?: KeyOfPalette
  width?: number
  height?: number
  content: string
}

const Datetime = ({
  typo = 'Body_14',
  color = 'BLACK',
  backgroundColor = 'GRAY300',
  width = 220,
  height = 30,
  content,
}: DateTimeProps) => {
  return (
    <DateTimeWrapper backgroundColor={backgroundColor} width={width} height={height}>
      <ChattingText typo={typo} color={color}>
        {content}
      </ChattingText>
    </DateTimeWrapper>
  )
}

const DateTimeWrapper = styled(FlexBox)<{
  backgroundColor: KeyOfPalette
  width: number
  height: number
}>`
  background-color: ${({ backgroundColor }) => theme.palette[backgroundColor]};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 15px;
  border-radius: 10px;
`

export default Datetime

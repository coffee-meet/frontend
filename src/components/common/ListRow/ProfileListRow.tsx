import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { FlexBox } from '@/components/common/Flexbox'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

export const StyleList = styled(FlexBox)<{
  width: number
  height: number
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: space-between;
`

const StyleIconWrapper = styled.div<{
  width: number
  height: number
  borderRadius?: string
  backgroundColor: string
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

type ProfileListRowProps = {
  firstIcon: ReactNode
  title: string
  additionalContent?: ReactNode | string
  isDarkMode?: boolean
}
const ProfileListRow = ({
  firstIcon,
  title,
  additionalContent,
  isDarkMode,
}: ProfileListRowProps) => {
  const isAdditionalContentString = typeof additionalContent === 'string'
  const additionalContentColor = isAdditionalContentString ? palette.GRAY300 : undefined

  return (
    <StyleList width={308} height={38}>
      <StyleIconWrapper
        width={38}
        height={38}
        borderRadius={'50%'}
        backgroundColor={isDarkMode ? palette.DARK_ICON : palette.GRAY100}
        style={{
          margin: '0 16px 0 0',
          color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
        }}
      >
        {firstIcon}
      </StyleIconWrapper>
      <Text
        font={'Body_16'}
        fontWeight={500}
        letterSpacing={-1}
        style={{
          flex: 1,
          textAlign: 'left',
          color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
        }}
      >
        {title}
      </Text>
      <Text
        font={'Body_12'}
        fontWeight={500}
        letterSpacing={0}
        style={{
          color: isDarkMode
            ? additionalContentColor
              ? additionalContentColor
              : palette.DARK_WHITE
            : additionalContentColor
            ? additionalContentColor
            : palette.GRAY500,
        }}
      >
        {additionalContent}
      </Text>
    </StyleList>
  )
}

export default ProfileListRow

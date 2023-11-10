import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { FlexBox } from '@/components/common/Flexbox'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

type ProfileListRowProps = {
  firstIcon: ReactNode
  title: string
  additionalContent?: ReactNode | string
  isDarkMode?: boolean
  moveFromProfileListRow?: () => void
}

/**
 * @param firstIcon - 첫번째 아이콘 (ReactNode)
 * @param title - 제목 (string)
 * @param additionalContent - 추가적인 내용 (string | ReactNode)
 * @param isDarkMode - 다크모드 여부
 * @param moveFromProfileListRow - 클릭 시 이동할 경로
 */

const ProfileListRow = ({
  firstIcon,
  title,
  additionalContent,
  isDarkMode,
  moveFromProfileListRow,
}: ProfileListRowProps) => {
  const isAdditionalContentString = typeof additionalContent === 'string'
  const additionalContentColor = isAdditionalContentString ? palette.GRAY300 : undefined

  return (
    <StyleList onClick={moveFromProfileListRow}>
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

export const StyleList = styled(FlexBox)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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

export default ProfileListRow

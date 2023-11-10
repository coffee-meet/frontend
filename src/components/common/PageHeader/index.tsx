import styled from '@emotion/styled'

import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const StyleIcon = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type PageHeaderProps = {
  title: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isDarkMode?: boolean
  hasBackground?: boolean
  onClick?: () => void
}

/**
 * @param title - 타이틀
 * @param leftIcon - (Optional) 왼쪽 아이콘
 * @param rightIcon - (Optional) 오른쪽 아이콘
 * @param isDarkMode - (Optional) 다크모드 여부
 * @param hasBackground - (Optional) 배경색 여부
 * @param onClick - (Optional) 클릭 이벤트
 */

const PageHeader = ({ leftIcon, rightIcon, title, isDarkMode, hasBackground }: PageHeaderProps) => {
  return (
    <StylePageHeader isDarkMode={isDarkMode} hasBackground={hasBackground}>
      <StyleIcon>{leftIcon}</StyleIcon>
      <Text
        font={'Body_20'}
        fontWeight={600}
        letterSpacing={-1}
        style={{
          color: isDarkMode
            ? hasBackground
              ? `${palette.DARK_WHITE}`
              : `${palette.DARK_WHITE}`
            : hasBackground
            ? `${palette.BLACK}`
            : `${palette.WHITE}`,
        }}
      >
        {title}
      </Text>
      <StyleIcon>{rightIcon}</StyleIcon>
    </StylePageHeader>
  )
}

const StylePageHeader = styled.div<{
  isDarkMode?: boolean
  hasBackground?: boolean
}>`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid
    ${({ isDarkMode, hasBackground }) =>
      isDarkMode
        ? hasBackground
          ? palette.GRAY500
          : 'none'
        : hasBackground
        ? palette.GRAY300
        : 'none'};
  background-color: ${({ isDarkMode, hasBackground }) =>
    isDarkMode
      ? hasBackground
        ? `${palette.DARK_BLUE}`
        : 'transparent'
      : hasBackground
      ? `${palette.GRAY100}`
      : 'transparent'};
`

export default PageHeader

import styled from '@emotion/styled'
import { BsChevronLeft } from 'react-icons/bs'

import { palette } from '@/styles/palette'

const StyleBackChevron = styled.div<BackChevronProps>`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ hasBackground, isDarkMode }) =>
    isDarkMode
      ? hasBackground
        ? `${palette.GRAY600}`
        : 'transparent'
      : hasBackground
      ? `${palette.WHITE}`
      : 'transparent'};
  border: ${({ hasBackground, isDarkMode }) =>
    isDarkMode
      ? hasBackground
        ? `1px solid ${palette.GRAY500}`
        : `1px solid ${palette.DARK_TERTIARY}`
      : hasBackground
      ? `1px solid ${palette.GRAY300}`
      : `1px solid ${palette.TERTIARY}`};
`

type BackChevronProps = {
  hasBackground?: boolean
  isDarkMode?: boolean
  prevClick?: () => void
}

/**
 * @param hasBackground - (Optional) 배경색 여부
 * @param isDarkMode - (Optional) 다크모드 여부
 * @param prevClick - (Optional) 뒤로가기 클릭 이벤트
 */

const BackChevron = ({ hasBackground, isDarkMode, prevClick }: BackChevronProps) => {
  return (
    <StyleBackChevron hasBackground={hasBackground} isDarkMode={isDarkMode} onClick={prevClick}>
      <BsChevronLeft
        size={20}
        style={{
          color: isDarkMode
            ? hasBackground
              ? `${palette.DARK_WHITE}`
              : `${palette.DARK_WHITE}`
            : hasBackground
            ? `${palette.BLACK}`
            : `${palette.WHITE}`,
        }}
      />
    </StyleBackChevron>
  )
}

export default BackChevron

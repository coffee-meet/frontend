import styled from '@emotion/styled'

import { palette } from '@/styles/palette'

type DividerProps = {
  width: string
  height: string
  margin?: string
  isDarkMode: boolean
}

/**
 * @param width - 너비 (string)
 * @param height - 높이 (string)
 * @param margin - (Optional) 마진
 * @param isDarkMode - 다크모드 여부
 */

export const Divider = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY500 : palette.GRAY100)};
`

import styled from '@emotion/styled'

import { palette } from '@/styles/palette'

type DividerProps = {
  width: number
  height: number
  margin?: string
  isDarkMode: boolean
}

export const Divider = styled.div<DividerProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: ${({ margin }) => margin};
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY500 : palette.GRAY100)};
`

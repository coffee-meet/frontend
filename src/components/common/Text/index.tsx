import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { KeyOfTypo } from '@/styles/theme'
import { typo } from '@/styles/typo'

/**
 * @param display: (기본값: flex)
 * @param flexDirection: (기본값: column)
 * @param justifyContent: (기본값: center)
 * @param alignItems: (기본값: flex-start)
 */

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Text = styled.div<{
  font: KeyOfTypo
  fontWeight: number
  letterSpacing: number
  textColor?: string
}>`
  ${({ font, fontWeight, letterSpacing, textColor }) => {
    const fontFunc = typo[font]
    return css`
      ${fontFunc(fontWeight, letterSpacing)}
      color: ${textColor};
    `
  }}
`

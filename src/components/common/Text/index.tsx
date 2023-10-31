import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { KeyOfTypo } from '@/styles/theme'
import { typo } from '@/styles/typo'

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
}>`
  ${({ font, fontWeight, letterSpacing }) => {
    const fontFunc = typo[font]
    return css`
      ${fontFunc(fontWeight, letterSpacing)}
    `
  }}
`

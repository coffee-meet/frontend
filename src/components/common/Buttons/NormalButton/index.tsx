import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { typo } from '@/styles/typo'

import { NormalButtonStyles, NormalButtonType } from './NormalButtonStyles'

const NormalButton = styled.button<{
  normalButtonType: NormalButtonType
}>`
  ${({ normalButtonType }) => {
    const fontFunc = typo[NormalButtonStyles[normalButtonType].font]
    return css`
      ${fontFunc(
        NormalButtonStyles[normalButtonType].fontWeight,
        NormalButtonStyles[normalButtonType].letterSpacing,
      )}
      width: ${NormalButtonStyles[normalButtonType].width}px;
      height: ${NormalButtonStyles[normalButtonType].height}px;
      color: ${NormalButtonStyles[normalButtonType].fontColor};
      background-color: ${NormalButtonStyles[normalButtonType].backgroundColor};
      box-shadow: ${NormalButtonStyles[normalButtonType].boxShadow};
      border-radius: ${NormalButtonStyles[normalButtonType].borderRadius}px;
    `
  }}
`

export default NormalButton

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { typo } from '@/styles/typo'

import { NormalButtonStyles, NormalButtonType } from './NormalButtonStyles'

const NormalButton = styled.button<{
  normalButtonType: NormalButtonType
  isDarkMode?: boolean
}>`
  ${({ normalButtonType, isDarkMode = false }) => {
    const processedTypeKey = isDarkMode ? `${normalButtonType}-dark` : normalButtonType
    const processedType = (
      NormalButtonStyles[processedTypeKey as NormalButtonType] ? processedTypeKey : normalButtonType
    ) as NormalButtonType

    console.log(processedType)

    const fontFunc = typo[NormalButtonStyles[processedType].font]
    return css`
      ${fontFunc(
        NormalButtonStyles[processedType].fontWeight,
        NormalButtonStyles[processedType].letterSpacing,
      )}
      width: ${NormalButtonStyles[processedType].width}px;
      height: ${NormalButtonStyles[processedType].height}px;
      color: ${NormalButtonStyles[processedType].fontColor};
      background-color: ${NormalButtonStyles[processedType].backgroundColor};
      box-shadow: ${NormalButtonStyles[processedType].boxShadow};
      border-radius: ${NormalButtonStyles[processedType].borderRadius}px;
    `
  }}
`

export default NormalButton

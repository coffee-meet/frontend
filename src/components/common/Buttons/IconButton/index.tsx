import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { typo } from '@/styles/typo'

import { iconButtonStyles, IconButtonType } from './IconButtonStyles'
import InterestButton from './InterestButton'
import KakaoButton from './KakaoButton'
import NaverButton from './NaverButton'
import ParticularTopicButton from './ParticularTopicButton'
import RandomMatchingButton from './RandomMatchingButton'

export const StyledIconButtonWrapper = styled.button<{
  iconButtonType: IconButtonType
}>`
  ${({ iconButtonType }) => {
    const fontFunc = typo[iconButtonStyles[iconButtonType].font]
    return css`
      ${fontFunc(
        iconButtonStyles[iconButtonType].fontWeight,
        iconButtonStyles[iconButtonType].letterSpacing,
      )}

      width: ${iconButtonStyles[iconButtonType].width};
      height: ${iconButtonStyles[iconButtonType].height}px;
      color: ${iconButtonStyles[iconButtonType].fontColor};
      background: ${iconButtonStyles[iconButtonType].backgroundColor};
      box-shadow: ${iconButtonStyles[iconButtonType].boxShadow};
      border-radius: ${iconButtonStyles[iconButtonType].borderRadius}px;

      &:active {
        background: ${iconButtonStyles[iconButtonType].activeBackgroundColor};
      }
    `
  }}
`

export const StyledIconWrapper = styled.div<{
  borderRadius?: string
  backgroundColor?: string
}>`
  width: 35px;
  height: 35px;
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 33px 18px 14px;

  @media (max-width: 280px) {
    margin: 18px 14px 18px 14px;
  }
`

export { InterestButton, KakaoButton, NaverButton, ParticularTopicButton, RandomMatchingButton }

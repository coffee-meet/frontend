import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
  iconButtonStyles,
  IconButtonType,
} from '@/components/common/Buttons/IconButton/IconButtonStyles'
import InterestButton from '@/components/common/Buttons/IconButton/InterestButton'
import KakaoButton from '@/components/common/Buttons/IconButton/KakaoButton'
import NaverButton from '@/components/common/Buttons/IconButton/NaverButton'
import ParticularTopicButton from '@/components/common/Buttons/IconButton/ParticularTopicButton'
import RandomMatchingButton from '@/components/common/Buttons/IconButton/RandomMatchingButton'
import { typo } from '@/styles/typo'

export type OAuthButtonProps = {
  moveToOAuthProvider: () => void
}

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
  margin: 4px 38px 4px 20px;
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

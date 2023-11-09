/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react'

import { KeyOfPalette, theme } from '@/styles/theme'

type SpacingProps = {
  size: number
  color?: KeyOfPalette
  css?: SerializedStyles
}

const Spacing = ({ size, color, css: customCss }: SpacingProps) => {
  return (
    <div
      css={[
        css`
          height: ${size}px;
          width: 100%;
          background-color: ${color ? `${theme.palette[color]}` : 'transparent'};
        `,
        customCss, // 사용자 정의 스타일을 적용
      ]}
    />
  )
}

export default Spacing

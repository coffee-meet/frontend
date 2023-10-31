/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { KeyOfPalette, theme } from '@/styles/theme'

const Spacing = ({ size, color }: { size: number; color?: KeyOfPalette }) => {
  return (
    <div
      css={css`
        height: ${size}px;
        width: 100%;
        background-color: ${color ? `${theme.palette[color]}` : 'transparent'};
      `}
    ></div>
  )
}

export default Spacing

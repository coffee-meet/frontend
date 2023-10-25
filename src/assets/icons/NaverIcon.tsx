import { palette } from '@/styles/palette'

import { IconProps } from './KakaoIcon'

const NaverIcon = ({ width, height, iconWidth, iconHeight, borderRadius }: IconProps) => (
  <span
    style={{
      backgroundColor: palette.GREEN,
      width,
      height,
      borderRadius,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <svg
      width={iconWidth || 21}
      height={iconHeight || 21}
      viewBox={'0 0 21 21'}
      fill={'none'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M14.3059 11.3803L6.7286 0.533627H0.447266V20.8003H7.02727V9.95363L14.6046 20.8003H20.8859V0.533627H14.3059V11.3803Z'
        }
        fill={'white'}
      />
    </svg>
  </span>
)

export default NaverIcon

import NaverIcon from '@/assets/icons/NaverIcon'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import { StyleIconWrapper } from '.'
import { ButtonWrapper } from './KakaoButton'

const NaverButton = () => {
  return (
    <ButtonWrapper buttonTheme={'naver'}>
      <StyleIconWrapper
        style={{
          margin: '4px 53px 4px 20px',
        }}
      >
        <NaverIcon width={53} height={53} iconWidth={20} iconHeight={20} borderRadius={10} />
      </StyleIconWrapper>
      <Text
        font={'Body_18'}
        fontWeight={600}
        letterSpacing={-1}
        style={{
          flex: 1,
          textAlign: 'left',
          color: palette.WHITE,
        }}
      >
        {'네이버로 시작'}
      </Text>
    </ButtonWrapper>
  )
}

export default NaverButton

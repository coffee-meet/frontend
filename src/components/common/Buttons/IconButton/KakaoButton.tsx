import styled from '@emotion/styled'

import KakaoIcon from '@/assets/icons/KakaoIcon'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import { StyleIconWrapper } from '.'

export const ButtonWrapper = styled.button<{
  buttonTheme: 'kakao' | 'naver'
}>`
  width: 320px;
  height: 60px;
  background-color: ${(props) => (props.buttonTheme === 'naver' ? palette.GREEN : palette.YELLOW)};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`

const KakaoButton = () => (
  <ButtonWrapper buttonTheme={'kakao'}>
    <StyleIconWrapper
      style={{
        margin: '4px 38px 4px 20px',
      }}
    >
      <KakaoIcon width={53} height={53} iconWidth={35} iconHeight={35} borderRadius={10} />
    </StyleIconWrapper>
    <Text
      font={'Body_18'}
      fontWeight={600}
      letterSpacing={-1}
      style={{ flex: 1, textAlign: 'left' }}
    >
      {'카카오톡으로 시작'}
    </Text>
  </ButtonWrapper>
)

export default KakaoButton

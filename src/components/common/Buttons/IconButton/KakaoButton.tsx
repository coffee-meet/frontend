import styled from '@emotion/styled'

import KakaoIcon from '@/assets/icons/KakaoIcon'
import { OAuthButtonProps, StyledIconWrapper } from '@/components/common/Buttons/IconButton'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const KakaoButton = ({ moveToOAuthProvider }: OAuthButtonProps) => (
  <StyledButtonWrapper buttonTheme={'kakao'} onClick={moveToOAuthProvider}>
    <StyledIconWrapper>
      <KakaoIcon width={53} height={53} iconWidth={35} iconHeight={35} borderRadius={10} />
    </StyledIconWrapper>
    <Text
      font={'Body_18'}
      fontWeight={600}
      letterSpacing={-1}
      style={{ flex: 1, textAlign: 'left', marginLeft: 20 }}
    >
      {'카카오톡으로 시작'}
    </Text>
  </StyledButtonWrapper>
)

export const StyledButtonWrapper = styled.button<{
  buttonTheme: 'kakao' | 'naver'
  onClick: () => void
}>`
  width: 320px;
  height: 60px;
  background-color: ${(props) => (props.buttonTheme === 'naver' ? palette.GREEN : palette.YELLOW)};
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 280px) {
    width: 250px;
  }
`

export default KakaoButton

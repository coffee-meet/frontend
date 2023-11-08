import styled from '@emotion/styled'

import { KakaoButton, NaverButton } from '@/components/common/Buttons/IconButton'
import HeroImage from '@/components/common/HeroImage'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import useAuthStore from '@/store/AuthStore'
import { palette } from '@/styles/palette'

export type Provider = 'naver' | 'kakao'

const BASE_URL = import.meta.env.VITE_BASE_URL

const Login = () => {
  const setProvider = useAuthStore((state) => state.setProvider)

  const handleMoveToAuthProvider = async (provider: Provider) => {
    window.location.assign(`${BASE_URL}/v1/oauth2.0/${provider}`)
    setProvider(provider)
  }

  return (
    <StyledLoginOuterWrapper>
      <HeroImage
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      />
      <StyledLoginContainer>
        <Spacing size={45} />
        <Text font={'Body_32'} fontWeight={700} letterSpacing={-1}>
          {'☕️커피밋'}
        </Text>
        <Spacing size={50} />

        <Text font={'Body_18'} fontWeight={500} letterSpacing={-1}>
          {'회사의 경계를 넘어, '}
        </Text>
        <Spacing size={10} />

        <Text font={'Body_18'} fontWeight={500} letterSpacing={-1}>
          {' 새로운 대화의 세계를 탐험하세요!'}
        </Text>
        <Spacing size={80} />

        <StyledOauthWrapper>
          <NaverButton
            moveToOAuthProvider={() => {
              handleMoveToAuthProvider('naver')
            }}
          />
          <Spacing size={16} />
          <KakaoButton
            moveToOAuthProvider={() => {
              handleMoveToAuthProvider('kakao')
            }}
          />
        </StyledOauthWrapper>
      </StyledLoginContainer>
    </StyledLoginOuterWrapper>
  )
}

const StyledLoginOuterWrapper = styled.div`
  background-color: ${palette.SKY_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledOauthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledLoginContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 441px;
  background-color: ${palette.WHITE};
  border-radius: 20px;
  text-align: center;
`
export default Login

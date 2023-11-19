import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { KakaoButton, NaverButton } from '@/components/common/Buttons/IconButton'
import HeroImage from '@/components/common/HeroImage'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import useAuthStore from '@/store/AuthStore'
import { palette } from '@/styles/palette'

export type Provider = 'NAVER' | 'KAKAO'

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
        <Spacing
          size={45}
          css={css`
            @media (max-width: 375px) {
              height: ${45 * 0.75}px;
            }
          `}
        />
        <StyledHeaderText font={'Body_32'} fontWeight={700} letterSpacing={-1}>
          {'☕️커피밋'}
        </StyledHeaderText>
        <Spacing
          size={50}
          css={css`
            @media (max-width: 375px) {
              height: ${50 * 0.75}px;
            }
          `}
        />

        <StyledSubText font={'Body_18'} fontWeight={500} letterSpacing={-1}>
          {'회사의 경계를 넘어, '}
        </StyledSubText>
        <Spacing
          size={10}
          css={css`
            @media (max-width: 375px) {
              height: ${10 * 0.75}px;
            }
          `}
        />

        <StyledSubText font={'Body_18'} fontWeight={500} letterSpacing={-1}>
          {' 새로운 대화의 세계를 탐험하세요!'}
        </StyledSubText>
        <Spacing
          size={80}
          css={css`
            @media (max-width: 375px) {
              height: ${80 * 0.75}px;
            }
          `}
        />

        <StyledOauthWrapper>
          <NaverButton
            moveToOAuthProvider={() => {
              handleMoveToAuthProvider('NAVER')
            }}
          />
          <Spacing
            size={16}
            css={css`
              @media (max-width: 375px) {
                height: ${16 * 0.75}px;
              }
            `}
          />
          <KakaoButton
            moveToOAuthProvider={() => {
              handleMoveToAuthProvider('KAKAO')
            }}
          />
        </StyledOauthWrapper>
      </StyledLoginContainer>
    </StyledLoginOuterWrapper>
  )
}

const StyledLoginOuterWrapper = styled.div`
  background-color: ${palette.SKY_BLUE};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  padding-bottom: 10%;
`

const StyledHeaderText = styled(Text)`
  @media (max-width: 280px) {
    font-size: 24px;
  }
`

const StyledSubText = styled(Text)`
  @media (max-width: 280px) {
    font-size: 14px;
  }
`
export default Login

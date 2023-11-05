import styled from '@emotion/styled'

import { KakaoButton, NaverButton } from '@/components/common/Buttons/IconButton'
import HeroImage from '@/components/common/HeroImage'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const Login = () => {
  return (
    <>
      <HeroImage />

      <StyledContainer>
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

        <OauthWrapper>
          <NaverButton />
          <Spacing size={16} />
          <KakaoButton />
        </OauthWrapper>
      </StyledContainer>
    </>
  )
}

const OauthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledContainer = styled.div`
  width: 100%;
  height: 441px;
  background-color: ${palette.WHITE};
  border-radius: 20px;
  text-align: center;
`
export default Login

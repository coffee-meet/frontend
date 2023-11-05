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

      <div
        style={{
          width: '100%',
          height: '441px',
          backgroundColor: palette.WHITE,
          borderRadius: '20px',
          textAlign: 'center',
        }}
      >
        <Spacing size={45} />
        <Text font={'Body_32'} fontWeight={30} letterSpacing={0}>
          {'☕️커피밋'}
        </Text>
        <Spacing size={50} />

        <Text font={'Body_18'} fontWeight={0} letterSpacing={0}>
          {'회사의 경계를 넘어, '}
        </Text>
        <Spacing size={10} />

        <Text font={'Body_18'} fontWeight={0} letterSpacing={0}>
          {' 새로운 대화의 세계를 탐험하세요!'}
        </Text>
        <Spacing size={80} />

        <OauthWrapper>
          <NaverButton />
          <Spacing size={16} />
          <KakaoButton />
        </OauthWrapper>
      </div>
    </>
  )
}

const OauthWrapper = styled.div`
  display: flex;
  justify-content: center; // 수평 방향으로 가운데 정렬
  align-items: center; // 수직 방향으로 가운데 정렬 (필요하면 추가)
  flex-direction: column; // 버튼들을 수직으로 나열
`
export default Login

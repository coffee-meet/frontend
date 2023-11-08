import styled from '@emotion/styled'

import NotFoundIcon from '@/assets/icons/NotFoundIcon'
import NormalButton from '@/components/common/Buttons/NormalButton'
import GradationBackground from '@/components/common/GradationBackground'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const NotFoundPage = () => {
  // TODO: zustand로 darkMode 상태 받기
  const isDarkMode = true

  return (
    <StyledNotFoundPage>
      <GradationBackground isDarkMode={isDarkMode}>
        <Spacing size={80} />
        <StyledNotFoundPageBackground isDarkMode={isDarkMode}>
          <Spacing size={40} />
          <StyledNotFoundPageHeaderContent
            font={'Body_72'}
            fontWeight={700}
            letterSpacing={-4}
            isDarkMode={isDarkMode}
          >
            {'404'}
            <Text
              font={'Body_18'}
              fontWeight={700}
              letterSpacing={-1}
              style={{
                textAlign: 'center',
                marginTop: 15,
                color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
              }}
            >
              {'앗, 현재 페이지를 찾을 수 없어요! 😭'}
            </Text>
          </StyledNotFoundPageHeaderContent>
          <StyledNotFoundPageMainContent>
            <StyledNotFoundIconWrapper>
              <NotFoundIcon isDarkMode={isDarkMode} />
              <NormalButton normalButtonType={'form-submit'}>{'홈으로 돌아가기'}</NormalButton>
            </StyledNotFoundIconWrapper>
            <Spacing size={58.5} />
          </StyledNotFoundPageMainContent>
        </StyledNotFoundPageBackground>
      </GradationBackground>
    </StyledNotFoundPage>
  )
}

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNotFoundPageBackground = styled.div<{
  isDarkMode: boolean
}>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledNotFoundPageHeaderContent = styled(Text)<{ isDarkMode: boolean }>`
  text-align: center;
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.BLACK)};

  @media (max-width: 280px) {
    font-size: 4rem;
  }
`

const StyledNotFoundPageMainContent = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 280px) {
    font-size: 0.875rem;
  }
`

const StyledNotFoundIconWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFoundPage

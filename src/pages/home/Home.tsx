import { useState } from 'react'

import AppHeader from '@/components/common/AppHeader'
import { ParticularTopicButton } from '@/components/common/Buttons/IconButton'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import { Text } from '@/components/common/Text'
import Card from '@/components/home/Card'
import useToast from '@/hooks/useToast'
import useThemeStore from '@/store/ThemeStore'
import { palette } from '@/styles/palette'

const Home = () => {
  const nickname = '우땅'
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode)
  const [isMatching, setIsMatching] = useState(false)

  const { showToast } = useToast()

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <AppHeader nickname={nickname} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <PageContainer
        height={'80%'}
        isDarkMode={isDarkMode}
        style={{
          padding: '5% 5%',
        }}
      >
        <Text
          font={'Body_16'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: '33px 0 22px 0',
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.BLACK}`,
          }}
        >
          {'진행중인 매칭'}
        </Text>
        <Card
          isMatching={isMatching}
          onClick={() => {
            setIsMatching((prev) => !prev)
          }}
          isDarkMode={isDarkMode}
        />
        <Text
          font={'Body_16'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: '32px 0 13px 0',
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.BLACK}`,
          }}
        >
          {'커피밋의 추천기능'}
        </Text>
        <ParticularTopicButton
          isDarkMode={isDarkMode}
          moveToParticularTopic={() => {
            showToast({
              message: '아직 준비중인 기능입니다!',
              type: 'info',
              isDarkMode,
            })
          }}
        />
      </PageContainer>
      <NavigationBar isDarkMode={isDarkMode} />
    </GradationBackground>
  )
}

export default Home

import { useState } from 'react'

import AppHeader from '@/components/common/AppHeader'
import { ParticularTopicButton } from '@/components/common/Buttons/IconButton'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import { Text } from '@/components/common/Text'
import Card from '@/components/home/Card'

const Home = () => {
  const nickname = '우땅'
  const isDarkMode = false
  const [isMatching, setIsMatching] = useState(false)

  return (
    <GradationBackground>
      <AppHeader nickname={nickname} isDarkMode={isDarkMode} />
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
          }}
        >
          {'커피밋의 추천기능'}
        </Text>
        <ParticularTopicButton isDarkMode={isDarkMode} />
      </PageContainer>
      <NavigationBar />
    </GradationBackground>
  )
}

export default Home

import { useNavigate } from 'react-router-dom'

import ChatRoomBubbles from '@/components/chatList/ChatRoomBubbles'
import BackChevron from '@/components/common/BackChevron'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'

const ChatList = () => {
  // TODO: useThemeStore로 isDarkMode 상태 가져오기
  const isDarkMode = true
  const navigate = useNavigate()

  const chatRoomList = [
    {
      title: '🥤️ 차가운 아메리카노-6',
      participants: ['우땅', '빅맘', '롤로노아 조로'],
      createdAt: '2023-11-05T22:00:00',
    },
    {
      title: '🧃 미지근한 사과주스-23',
      participants: ['우땅', '빅맘', '루피'],
      createdAt: '2023-11-05T22:30:00',
    },
    {
      title: '☕️ 따뜻한 아메리카노-10',
      participants: ['우땅', '빅맘', '나미'],
      createdAt: '2023-11-05T23:00:00',
    },
    {
      title: '🍰️ 차가운 케이크-8',
      participants: ['우땅', '빅맘', '상디'],
      createdAt: '2023-11-05T24:00:00',
    },
    {
      title: '🍦 고소한 아이스크림-2',
      participants: ['우땅', '빅맘', '우솝'],
      createdAt: '2023-11-06T00:10:50',
    },
  ]

  return (
    <GradationBackground>
      <Spacing size={50} />
      <PageContainer height={'80%'} isDarkMode={isDarkMode}>
        <PageHeader
          title={'이전 대화방'}
          leftIcon={
            <BackChevron
              hasBackground={true}
              isDarkMode={isDarkMode}
              prevClick={() => {
                navigate(-1)
              }}
            />
          }
          isDarkMode={isDarkMode}
          hasBackground={true}
          style={{
            position: 'fixed',
            zIndex: 1,
          }}
        />
        <ChatRoomBubbles chatRoomList={chatRoomList} isDarkMode={isDarkMode} />
      </PageContainer>
      <NavigationBar />
    </GradationBackground>
  )
}

export default ChatList

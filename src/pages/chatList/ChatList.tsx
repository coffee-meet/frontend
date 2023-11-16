
import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import ChatListApi from '@/apis/chatList/ChatListApi'
import ChatRoomBubbles from '@/components/chatList/ChatRoomBubbles'
import BackChevron from '@/components/common/BackChevron'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'
import useThemeStore from '@/store/ThemeStore'

const ChatList = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const navigate = useNavigate()

  // TODO: TanStack의 useQuery를 사용하여 채팅방 목록 가져오기
  // 일단 MSW로 mock data를 만들어서 사용
  const { data, isSuccess } = useQuery(['chatRoomList'], ChatListApi.GET_CHAT_LIST)

  const containerVariants = {
    initial: { opacity: 0 },
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.5 },
    },
  }

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <Spacing size={50} />
      <PageContainer height={'80%'} isDarkMode={isDarkMode}>
        <StyledPageHeader
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
        {isSuccess && (
          <motion.div variants={containerVariants} initial={'hidden'} animate={'visible'}>
            <ChatRoomBubbles chatRoomList={data?.data} isDarkMode={isDarkMode} />
          </motion.div>
        )}
      </PageContainer>
      <NavigationBar isDarkMode={isDarkMode} />
    </GradationBackground>
  )
}

const StyledPageHeader = styled(PageHeader)`
  padding: 0 18px;
`

export default ChatList

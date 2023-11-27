import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { axiosAPI } from '@/apis/axios'
import ChatRoomBubbles from '@/components/chatList/ChatRoomBubbles'
import BackChevron from '@/components/common/BackChevron'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'
import useThemeStore from '@/store/ThemeStore'

type ChatHistoryType = {
  roomId: number
  roomName: string
  users: string[]
  createdAt: string
}

const ChatList = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const navigate = useNavigate()
  const [chatHistoryData, setChatHistoryData] = useState<ChatHistoryType[]>([])
  const getChatHistoryData = async () => {
    await axiosAPI
      .get('/v1/chatting/room/histories')
      .then((response) => {
        setChatHistoryData(response.data.chatRoomHistories)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const containerVariants = {
    initial: { opacity: 0 },
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 0.5 },
    },
  }
  useEffect(() => {
    getChatHistoryData()
  }, [])

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
        {chatHistoryData && (
          <motion.div variants={containerVariants} initial={'hidden'} animate={'visible'}>
            {chatHistoryData?.length == 0 ? (
              '이전 채팅방이 없습니다!'
            ) : (
              <ChatRoomBubbles chatRoomList={chatHistoryData} isDarkMode={isDarkMode} />
            )}
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

import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

import { axiosAPI } from '@/apis/axios'
import { Messages } from '@/apis/chatting/chattingType'
import Send from '@/assets/icons/Send.svg'
import { FlexBox } from '@/components/common/Flexbox'
import GradationBackground from '@/components/common/GradationBackground'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'
import TextArea from '@/components/common/TextArea'
import MessageArea from '@/components/messageArea'
import { palette } from '@/styles/palette'

const ChatListDetail = () => {
  const navigate = useNavigate()
  const { chatroomId } = useLocation().state
  // const chatroomId = '1'
  const [messages, setMessages] = useState<Messages[] | []>([] as Messages[])

  const messageWrapperRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const navigateChatList = () => {
    navigate('/chat-list')
  }
  const getChattingHistory = async () => {
    await axiosAPI
      .get(`/v1/chatting/room/histories/${chatroomId}`)
      .then((response) => {
        setMessages(response.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getChattingHistory()
  }, [])
  return (
    <>
      <GradationBackground isDarkMode={false}>
        <Spacing size={46} />
        <PageContainer isDarkMode={false} height={'100%'}>
          <StyleChattingWrapper ref={divRef}>
            <PageHeader
              title={'Matching Room Name'}
              hasBackground={true}
              leftIcon={
                <BsArrowLeftShort
                  size={32}
                  color={`${palette.GRAY500}`}
                  onClick={navigateChatList}
                />
              }
              rightIcon={null}
            ></PageHeader>
            <StyleMessageWrapper ref={messageWrapperRef}>
              {messages && <MessageArea messageData={messages} />}
            </StyleMessageWrapper>
            <StyleTypingFlexBox gap={10}>
              <TextArea
                ref={messageRef}
                height={35}
                placeholder={'대화 불가능한 상태입니다.'}
                disabled
              ></TextArea>
              <StyleSubmitButton>
                <StyleIcon src={Send} />
              </StyleSubmitButton>
            </StyleTypingFlexBox>
          </StyleChattingWrapper>
        </PageContainer>
      </GradationBackground>
    </>
  )
}

const StyleIcon = styled.img`
  width: 30px;
  height: 30px;
`
const StyleTypingFlexBox = styled(FlexBox)`
  padding: 10px;
  border-radius: 10px;
`
const StyleChattingWrapper = styled.span``

const StyleMessageWrapper = styled.div`
  height: calc(100% - 145px);
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const StyleSubmitButton = styled.button``

export default ChatListDetail

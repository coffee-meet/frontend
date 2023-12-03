import styled from '@emotion/styled'
import * as Stomp from '@stomp/stompjs'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

import { axiosAPI } from '@/apis/axios'
import { Messages } from '@/apis/chatting/chattingType'
import ExitIcon from '@/assets/icons/ExitIcon'
import Send from '@/assets/icons/Send.svg'
import ProfileSheet from '@/components/common/BottomSheet/ProfileSheet'
import { FlexBox } from '@/components/common/Flexbox'
import GradationBackground from '@/components/common/GradationBackground'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'
import TextArea from '@/components/common/TextArea'
import MessageArea from '@/components/messageArea'
import { useModal } from '@/hooks/useModal'
import useToast from '@/hooks/useToast'
import useBottomSheetStore from '@/store/BottomSheetStore'
import { palette } from '@/styles/palette'

const Chatting = () => {
  const { openModal } = useModal()
  const navigate = useNavigate()
  const { chatroomId } = useLocation().state
  const { chatroomName } = useLocation().state
  const [messages, setMessages] = useState<Messages[] | []>([] as Messages[])
  // const messageRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const messageWrapperRef = useRef<HTMLDivElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const { showToast } = useToast()

  // const { data, isLoading } = useQuery(['messages'], () => getDetailMessages, {
  //   onSuccess: (responseData: Messages[]) => {
  //     setMessages(responseData)
  //     console.log(responseData)
  //   },
  // })

  const getDetailMessages = async () => {
    try {
      const response = await axiosAPI.get(`/v1/chatting/rooms/${chatroomId}`)

      setMessages(response.data.chats)
    } catch (error) {
      console.error('Message fetching error')
    }
  }

  const client = useRef<Stomp.Client | null>()

  const connect = () => {
    client.current = new Stomp.Client({
      brokerURL: `wss://${import.meta.env.VITE_CHAT_URL}/stomp`,
      onConnect: () => {
        console.log('소켓 연결완료')
        subscribe()
      },
      onDisconnect: (response) => {
        console.log(response)
      },
      connectHeaders: {
        Authorization: `${localStorage.getItem('jwt')}`,
      },
    })
    client.current.activate()
  }

  const subscribe = () => {
    console.log('구독 함수 실행')
    if (client.current) {
      if (!client.current.connected) return
      client.current.subscribe(`/sub/chatting/rooms/${chatroomId}`, (response) => {
        const JsonBody = JSON.parse(response.body)

        setMessages((_chatList) => [..._chatList, JsonBody])
      })
    }
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    messageRef.current && send(messageRef.current.value)
    if (messageRef.current) messageRef.current.value = ''
  }
  const handleClickExitRoom = () => {
    openModal({
      mainText: '채팅방을 나가시겠습니까?',
      subText: '채팅방을 1명이라도 나가면 해당 채팅방은 폭파됩니다.',
      okFunc: () => deleteChattingRoom(),
      type: 'confirm',
    })
  }
  const deleteChattingRoom = async () => {
    await axiosAPI.delete(`/v1/chatting/rooms/${chatroomId}`)
    navigateHome()
  }
  const navigateHome = () => {
    disconnect()
    setTimeout(() => navigate('/'), 3000)
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) {
      return
    }
    if (event.key == 'Enter') {
      messageRef.current && send(messageRef.current.value)
      return false
    }
  }
  const send = (message: string) => {
    if (!isChattingRoomAlive) {
      showToast({
        message: '삭제된 채팅방입니다😭. 홈으로 이동합니다!',
        type: 'warning',
        isDarkMode: false,
      })
      navigateHome()
    }
    if (client.current) {
      if (!client.current.connected) return

      if (messageRef.current) messageRef.current.value = ''
      client.current.publish({
        destination: '/pub/chatting/messages',
        body: JSON.stringify({
          roomId: chatroomId,
          content: message,
        }),
        headers: {
          Authorization: `${localStorage.getItem('jwt')}`,
        },
      })
    }
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop = messageWrapperRef.current.scrollHeight
    }
  }
  const disconnect = () => {
    if (client.current) client.current.deactivate()
  }
  //렌더링 되기 전, 보내기 전  채팅방 터졌는지 안 터졌는지 확인하는 함수
  const isChattingRoomAlive = async () => {
    const response = await axiosAPI.get(`/v1/chatting/rooms/${chatroomId}/exist`)
    if (response.data.isExisted == true) return true
    else return false
  }
  // useEffect(() => {
  //   window.location.reload()
  // }, [])
  useEffect(() => {
    if (messageWrapperRef.current !== null)
      messageWrapperRef.current.scrollTop = messageWrapperRef.current.scrollHeight
  })

  useEffect(() => {
    if (!isChattingRoomAlive) {
      showToast({
        message: '삭제된 채팅방입니다😭. 홈으로 이동합니다!',
        type: 'warning',
        isDarkMode: false,
      })
      navigateHome()
    }
    connect()
    return () => disconnect()
  }, [chatroomId])

  useEffect(() => {
    getDetailMessages()
  }, [])
  const { bottomSheetState } = useBottomSheetStore()
  return (
    <>
      {bottomSheetState && <ProfileSheet title={'프로필'} isDarkMode={false} />}
      <GradationBackground isDarkMode={false}>
        <Spacing size={46} />
        <PageContainer isDarkMode={false} height={'100%'}>
          <StyleChattingWrapper ref={divRef}>
            <PageHeader
              title={chatroomName}
              hasBackground={true}
              leftIcon={
                <BsArrowLeftShort size={32} color={`${palette.GRAY500}`} onClick={navigateHome} />
              }
              rightIcon={<ExitIcon exitClick={handleClickExitRoom} />}
            ></PageHeader>

            <StyleMessageWrapper ref={messageWrapperRef}>
              {messages && <MessageArea messageData={messages} />}
            </StyleMessageWrapper>

            <StyleTypingFlexBox gap={10}>
              <TextArea
                ref={messageRef}
                placeholder={'메시지를 입력하세요.'}
                height={35}
                onKeyDown={(e) => handleKeyDown(e)}
              />
              <StyleSubmitButton onClick={(e) => handleSubmit(e)}>
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
export default Chatting

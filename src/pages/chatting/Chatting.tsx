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
      console.log(response)
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
        console.log(response.body)
        setMessages((_chatList) => [..._chatList, JsonBody])
      })
    }
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    messageRef.current && send(messageRef.current.value)
  }
  const handleClickExitRoom = () => {
    openModal({
      mainText: '채팅방을 나가시겠습니까?',
      subText: '채팅방을 1명이라도  나가면  해당 채팅방은 폭파됩니다.',
      okFunc: () => deleteChattingRoom(),
      type: 'confirm',
    })
  }
  const deleteChattingRoom = async () => {
    navigate('/')
    return await axiosAPI.delete(`/v1/chatting/rooms/${chatroomId}`)
  }
  const navigateHome = () => {
    navigate('/')
  }
  const handleKeyDown = (e: { key: string }) => {
    if (e.key == 'Enter') {
      messageRef.current && send(messageRef.current.value)
    }
  }
  const send = (message: string) => {
    if (client.current) {
      if (!client.current.connected) return
      console.log(message)
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
      navigate('/')
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
            {/* {isLoading ? (
            <Loading />
          ) : ( */}
            <StyleMessageWrapper ref={messageWrapperRef}>
              {messages && <MessageArea messageData={messages} />}
            </StyleMessageWrapper>
            {/* )} */}
            <StyleTypingFlexBox gap={10}>
              {/* <StyleTextArea width={'321px'} height={'36px'} borderRadius={'10px'} /> */}
              {/* <StyleInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} /> */}
              <TextArea ref={messageRef} height={35} onKeyDown={handleKeyDown} />
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
// const StyleInput = styled.input`
//   width: 321px;
//   height: 36px;
//   border-radius: 10px;
//   padding: 0 12px;
//   border: none;
// `
const StyleMessageWrapper = styled.div`
  height: calc(100% - 145px);
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`

const StyleSubmitButton = styled.button``
export default Chatting

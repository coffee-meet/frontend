import styled from '@emotion/styled'
import * as Stomp from '@stomp/stompjs'
import { useQuery } from '@tanstack/react-query'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { ChattingApi } from '@/apis/chatting/chattingApi'
import { Messages } from '@/apis/chatting/chattingType'
import ExitIcon from '@/assets/icons/ExitIcon'
import Send from '@/assets/icons/Send.svg'
import { FlexBox } from '@/components/common/Flexbox'
import GradationBackground from '@/components/common/GradationBackground'
import Loading from '@/components/common/Loading'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import Spacing from '@/components/common/Spacing'
import MessageArea from '@/components/messageArea'
import { useModal } from '@/hooks/useModal'
import { palette } from '@/styles/palette'

const Chatting = () => {
  const { openModal } = useModal()
  const navigate = useNavigate()
  const chatroomId = ''
  const [messages, setMessages] = useState<Messages[] | []>([] as Messages[])
  const [inputValue, setInputValue] = useState('')
  const { data, isLoading } = useQuery(['messages'], () => getDetailMessages, {
    onSuccess: async (responseData: Messages[]) => {
      setMessages(responseData)
    },
  })

  const getDetailMessages = async () => {
    try {
      const response = await ChattingApi.GET_DETAIL_MESSAGES()
      console.log(response)
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
      connectHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjk5MzQ3NjQ5fQ.pc39bNfs2NXsFmkRvOM0JzhAgdvec585fZ5zotPBupWAsFW_DEWcETcdz7VPa9vJ9zzNukO4yUcZo-Gf9sB12Q`,
      },
    })
    client.current.activate()
  }
  const subscribe = () => {
    console.log('구독 함수 실행')
    if (client.current) {
      if (!client.current.connected) return
      client.current.subscribe(`/sub/chatting/rooms/1`, (response) => {
        const JsonBody = JSON.parse(response.body)
        console.log(response.body)
        setMessages((_chatList) => [..._chatList, JsonBody])
      })
    }
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(inputValue)
  }
  const deleteChattingRoom = () => {
    openModal({
      mainText: '채팅방을 나가시겠습니까?',
      subText: '채팅방을 1명이라도  나가면  해당 채팅방은 폭파됩니다.',
      okFunc: () => {},
      type: 'confirm',
    })
  }
  const navigateHome = () => {
    navigate('/')
  }
  const send = (message: string) => {
    if (client.current) {
      if (!client.current.connected) return
      console.log(message)
      client.current.publish({
        destination: '/pub/chatting/messages',
        body: JSON.stringify({
          roomId: 1,
          content: inputValue,
        }),
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjk5MzQ3NjQ5fQ.pc39bNfs2NXsFmkRvOM0JzhAgdvec585fZ5zotPBupWAsFW_DEWcETcdz7VPa9vJ9zzNukO4yUcZo-Gf9sB12Q`,
        },
      })
    }
    setInputValue('')
  }
  const disconnect = () => {
    if (client.current) client.current.deactivate()
  }

  useEffect(() => {
    connect()
    return () => disconnect()
  }, [chatroomId])

  return (
    <>
      <GradationBackground isDarkMode={false}>
        <Spacing size={46} />
        <PageContainer isDarkMode={false}>
          <PageHeader
            title={'Matching Room Name'}
            hasBackground={true}
            leftIcon={
              <BsArrowLeftShort size={32} color={`${palette.GRAY500}`} onClick={navigateHome} />
            }
            rightIcon={<ExitIcon exitClick={deleteChattingRoom} />}
          ></PageHeader>
          {isLoading ? (
            <Loading />
          ) : (
            <StyleMessageWrapper>
              {messages && <MessageArea messageData={messages} />}
            </StyleMessageWrapper>
          )}
          <StyleTypingFlexBox gap={10}>
            {/* <StyleTextArea width={'321px'} height={'36px'} borderRadius={'10px'} /> */}
            <StyleInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <StyleSubmitButton onClick={(e) => handleSubmit(e)}>
              <StyleIcon src={Send} />
            </StyleSubmitButton>
          </StyleTypingFlexBox>
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

const StyleInput = styled.input`
  width: 321px;
  height: 36px;
  border-radius: 10px;
  padding: 0 12px;
  border: none;
`
const StyleMessageWrapper = styled.div`
  height: calc(100% - 120px);
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
`

const StyleSubmitButton = styled.button``
export default Chatting

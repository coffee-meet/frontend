import styled from '@emotion/styled'
import { timer } from 'd3'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

import { axiosAPI } from '@/apis/axios'
import { RandomMatchingButton } from '@/components/common/Buttons/IconButton'
import NormalButton from '@/components/common/Buttons/NormalButton'
import { FlexBox } from '@/components/common/Flexbox'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
// import useToast from '@/hooks/useToast'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

import Tip from './Tip'

type TimerRefType = ReturnType<typeof timer> | null

type CardProps = {
  isDarkMode: boolean
}

/**
 * @param isMatching - 현재 매칭 여부
 * @param isDarkMode - 다크모드 여부
 * @param onClick - 매칭 버튼 클릭 이벤트
 */

const Card = ({ isDarkMode }: CardProps) => {
  const [time, setTime] = useState(0)
  const timerRef = useRef<TimerRefType>(null)
  const [matchingStartedAt, setMatchingStartedAt] = useState('')
  const [, setIsMatching] = useState(false)
  const [currentState, setCurrentState] = useState('')
  const [chatroomId, setChatroomId] = useState('33')
  const [chatroomName, setChatroomName] = useState('')
  const navigate = useNavigate()
  // const { showToast } = useToast()

  const handleMoveChatting = () => {
    navigate('/chatting', { state: { chatroomId: chatroomId, chatroomName: chatroomName } })
  }

  const handleMatchingStart = async () => {
    setIsMatching((prev) => !prev)
    setCurrentState('MATCHING')
    await axiosAPI.post('/v1/matching/start').then((response) => {
      console.log(response)
      setCurrentState('MATCHING')
    })
  }

  const handleCancelClick = async () => {
    setIsMatching((prev) => !prev)
    setTime(0)
    if (timerRef.current) {
      timerRef.current.stop()
    }
    setCurrentState('IDLE')
    await axiosAPI.post('/v1/matching/cancel')
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, '0')
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const waitingCounter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: 'spring', damping: 12, duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  }
  const getCurrentMatchingState = async () => {
    await axiosAPI
      .get('/v1/users/status')
      .then((response) => {
        // if (currentState == response.data.userStatus)
        // showToast({
        //   message: '아직 매칭이 성사되지 않았습니다!',
        //   type: 'info',
        //   isDarkMode: isDarkMode,
        // })
        setCurrentState(response.data.userStatus)
        if (response.data.userStatus === 'CHATTING_UNCONNECTED') {
          setChatroomId(response.data.chattingRoomId)
          setChatroomName(response.data.chattingRoomName)
        }

        if (response.data.userStatus === 'CHATTING_CONNECTED') {
          setChatroomId(response.data.chattingRoomId)
          setChatroomName(response.data.chattingRoomName)
        }

        if (response.data.userStatus === 'MATCHING') {
          setMatchingStartedAt(response.data.startedAt)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCurrentMatchingState()
  }, [currentState])

  useEffect(() => {
    if (currentState === 'MATCHING') {
      //startTime에 서버에서 시작시간 받아와 new Date객체 안에 넣은 후 스트링으로 바꿔서 Date.parse한 후 Date.now()에서 뺄 것
      const date = new Date(matchingStartedAt)
      date.setHours(date.getHours() + 9)
      const startTime = !matchingStartedAt ? Date.now() : Date.parse(date.toString())

      const updateTimer = () => {
        const elapsedTime = Date.now() - startTime
        setTime(elapsedTime)
      }
      timerRef.current = timer(updateTimer, 1000)
    } else {
      if (timerRef.current) {
        timerRef.current.stop()
      }
    }

    return () => {
      if (timerRef.current) {
        timerRef.current.stop()
      }
    }
  }, [currentState])

  return (
    <AnimatePresence>
      <StyleCard isDarkMode={isDarkMode}>
        {currentState && currentState === 'IDLE' ? (
          <motion.div
            key={'randomButton'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={waitingCounter}
          >
            <RandomMatchingButton
              date={'2023-10-10'}
              isDarkMode={isDarkMode}
              onClick={handleMatchingStart}
            />
          </motion.div>
        ) : currentState && currentState === 'MATCHING' ? (
          <StyleWaitingWrapper
            key={'waiting'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={waitingCounter}
          >
            <StyleWaitingMidWrapper>
              <Text
                font={'Body_32'}
                fontWeight={600}
                letterSpacing={0}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                {formatTime(time)}
              </Text>
              <Spacing size={31} />
              <StyleMatchingCheckButton isDarkMode={isDarkMode} onClick={getCurrentMatchingState}>
                {'매칭 확인'}
              </StyleMatchingCheckButton>
              <Spacing size={21} />

              <Text
                font={'Body_14'}
                fontWeight={400}
                letterSpacing={-1}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                {'매칭 중'}&nbsp;&nbsp;&nbsp;
                <PulseLoader
                  size={3}
                  speedMultiplier={0.5}
                  cssOverride={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                />
              </Text>
            </StyleWaitingMidWrapper>
            <StyleMatchingCancelWrapper>
              <NormalButton normalButtonType={'matching'} onClick={handleCancelClick}>
                {'매칭 취소'}
              </NormalButton>
            </StyleMatchingCancelWrapper>
            <StyleWaitingBottomWrapper>
              <Tip />
            </StyleWaitingBottomWrapper>
          </StyleWaitingWrapper>
        ) : currentState && currentState === 'CHATTING_UNCONNECTED' ? (
          <>
            <Text
              font={'Body_16'}
              fontWeight={400}
              letterSpacing={-1}
              textColor={`${palette.GRAY400}`}
            >
              {'매칭이 완료되었습니다!'}
            </Text>
            <Spacing size={30}></Spacing>
            <StyleMoveChatButton onClick={handleMoveChatting}>
              <FlexBox gap={20} fullWidth={true}>
                <Text font={'Body_16'} fontWeight={600} letterSpacing={-1}>
                  {'채팅방으로 이동'}
                </Text>
                <IoIosArrowForward size={20} />
              </FlexBox>
            </StyleMoveChatButton>
            <Spacing size={31} />
          </>
        ) : currentState && currentState === 'REPORTED' ? (
          <Text
            font={'Body_16'}
            fontWeight={400}
            letterSpacing={-1}
            textColor={`${palette.GRAY400}`}
          >
            {'신고 제제 중인 사용자입니다.'}
          </Text>
        ) : (
          <Text
            font={'Body_16'}
            fontWeight={400}
            letterSpacing={-1}
            textColor={`${palette.GRAY400}`}
          >
            {'서버 에러입니다.'}
          </Text>
        )}
      </StyleCard>
    </AnimatePresence>
  )
}
const StyleMoveChatButton = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 20px;
  color: ${palette.WHITE};
  font-size: ${typo.Body_16(600)};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(
    to right,
    ${palette.SECONDARY} 0%,
    ${palette.SECONDARY} 50%,
    ${palette.GRADIENT} 110%
  );
`
const StyleMatchingCancelWrapper = styled.span`
  display: flex;
  position: relative;
  margin: 5px;
`
const StyleMatchingCheckButton = styled.button<{ isDarkMode: boolean }>`
  width: 200px;
  height: 60px;
  border-radius: 20px;
  color: ${palette.WHITE};
  font-size: ${typo.Body_16(600)};
  background-color: ${palette.SECONDARY};
`
const StyleCard = styled(motion.div)<{
  isDarkMode: boolean
}>`
  width: 100%;
  height: 348px;
  border-radius: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  box-shadow: ${palette.SHADOW};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 5% 1% 5%;
`

const StyleWaitingWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const StyleWaitingMidWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleWaitingBottomWrapper = styled.div``

export default Card

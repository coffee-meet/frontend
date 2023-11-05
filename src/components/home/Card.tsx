import styled from '@emotion/styled'
import { timer } from 'd3'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { PulseLoader } from 'react-spinners'

import { RandomMatchingButton } from '@/components/common/Buttons/IconButton'
import NormalButton from '@/components/common/Buttons/NormalButton'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import Tip from './Tip'

const StyleCard = styled(motion.div)`
  width: 100%;
  height: 348px;
  border-radius: 20px;
  background-color: ${palette.WHITE};
  box-shadow: ${palette.SHADOW};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 5% 1% 5%;
`

const StyleWatingWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const StyleWatingTopWrapper = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  position: relative;
`

const StyleWatingTopTextWrapper = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: flex-end;
`

const StyleWatingMidWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleWatingBottomWrapper = styled.div``

type TimerRefType = ReturnType<typeof timer> | null

type CardProps = {
  isMatching: boolean
  isDarkMode: boolean
  onClick: () => void
}

/**
 * @param isMatching - 현재 매칭 여부
 * @param isDarkMode - 다크모드 여부
 * @param onClick - 매칭 버튼 클릭 이벤트
 */

const Card = ({ isMatching, isDarkMode, onClick }: CardProps) => {
  const [time, setTime] = useState(0)
  const timerRef = useRef<TimerRefType>(null)

  const handleCancelClick = () => {
    setTime(0)
    if (timerRef.current) {
      timerRef.current.stop()
    }
    onClick()
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

  const watingCounter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: 'spring', damping: 12, duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  }

  useEffect(() => {
    if (isMatching) {
      const startTime = Date.now()
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
  }, [isMatching])

  return (
    <AnimatePresence>
      <StyleCard>
        {!isMatching ? (
          <motion.div
            key={'randomButton'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={watingCounter}
          >
            <RandomMatchingButton date={'2023-10-10'} isDarkMode={isDarkMode} onClick={onClick} />
          </motion.div>
        ) : (
          <StyleWatingWrapper
            key={'wating'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={watingCounter}
          >
            <StyleWatingTopWrapper>
              <StyleWatingTopTextWrapper>
                <Text font={'Body_32'} fontWeight={400} letterSpacing={2}>
                  {'3'}
                </Text>
                <Text
                  font={'Body_24'}
                  fontWeight={400}
                  letterSpacing={2}
                  style={{
                    color: palette.GRAY500,
                  }}
                >
                  {'/5'}
                </Text>
              </StyleWatingTopTextWrapper>
            </StyleWatingTopWrapper>
            <Spacing size={34} />
            <StyleWatingMidWrapper>
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
              <Spacing size={18} />
              <NormalButton normalButtonType={'matching'} onClick={handleCancelClick}>
                {'매칭 취소'}
              </NormalButton>
              <Spacing size={31} />
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
              <Spacing size={21} />
            </StyleWatingMidWrapper>
            <StyleWatingBottomWrapper>
              <Tip />
            </StyleWatingBottomWrapper>
          </StyleWatingWrapper>
        )}
      </StyleCard>
    </AnimatePresence>
  )
}

export default Card

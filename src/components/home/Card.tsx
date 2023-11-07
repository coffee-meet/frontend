import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { RandomMatchingButton } from '@/components/common/Buttons/IconButton'
import Spacing from '@/components/common/Spacing'
import useTimerStore from '@/store/TimerStore'
import { palette } from '@/styles/palette'

import Tip from './Tip'

const StyledCard = styled(motion.div)<{
  isDarkMode: boolean
}>`
  width: 100%;
  height: 348px;
  border-radius: 20px;
  box-shadow: ${palette.SHADOW};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 5% 1% 5%;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`

const StyledWatingWrapper = styled(motion.div)`
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
  isDarkMode: boolean
}

/**
 * @param isDarkMode - 다크모드 여부
 */

const Card = ({ isDarkMode }: CardProps) => {
  const { time, isRunning, startTimer, resetTimer } = useTimerStore()

  window.onload = () => {
    const navigationType = (
      performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    ).type
    if (navigationType !== 'reload') {
      resetTimer()
    }
  }

  useEffect(() => {
    if (isRunning) {
      startTimer()
    } else if (!isRunning) {
      resetTimer()
    }
  }, [isRunning, startTimer, resetTimer])

  return (
    <AnimatePresence>
      <StyledCard isDarkMode={isDarkMode}>
        {!isRunning ? (
          <motion.div
            key={'randomButton'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={watingCounter}
          >
            <RandomMatchingButton
              date={'2023-10-10'}
              isDarkMode={isDarkMode}
              onClick={startTimer}
            />
          </motion.div>
        ) : (
          <StyledWatingWrapper
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
            <CardMiddle
              time={time ? time : 0}
              handleResetClick={resetTimer}
              isDarkMode={isDarkMode}
            />
            <Spacing size={21} />
            <CardBottom isDarkMode={isDarkMode} />
          </StyledWatingWrapper>
        )}
      </StyledCard>
    </AnimatePresence>
  )
}

export default Card

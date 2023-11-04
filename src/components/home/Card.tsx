import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { RandomMatchingButton } from '@/components/common/Buttons/IconButton'
import Spacing from '@/components/common/Spacing'
import useTimerStore from '@/store/TimerStore'
import { palette } from '@/styles/palette'

import CardBottom from './CardBottom'
import CardHeader from './CardHeader'
import CardMiddle from './CardMiddle'

const StyleCard = styled(motion.div)<{
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
  padding: 19px 7px 15px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`

const StyleWatingWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const watingCounter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: 'spring', damping: 12, duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 1 } },
}

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
      <StyleCard isDarkMode={isDarkMode}>
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
          <StyleWatingWrapper
            key={'wating'}
            initial={'hidden'}
            animate={'visible'}
            exit={'exit'}
            variants={watingCounter}
          >
            <CardHeader totalMemberLen={5} currentMemberLen={3} isDarkMode={isDarkMode} />
            <Spacing size={34} />
            <CardMiddle
              time={time ? time : 0}
              handleResetClick={resetTimer}
              isDarkMode={isDarkMode}
            />
            <Spacing size={21} />
            <CardBottom isDarkMode={isDarkMode} />
          </StyleWatingWrapper>
        )}
      </StyleCard>
    </AnimatePresence>
  )
}

export default Card

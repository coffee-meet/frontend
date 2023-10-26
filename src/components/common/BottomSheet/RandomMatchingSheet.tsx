import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion'
import { MouseEvent, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import RandomMatchingJoinButton from '@/components/common/Buttons/IconButton/RandomMatchingJoin'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import Timer from './Timer'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow-y: hidden;
`

const BottomContentWrapper = styled(motion.div)<{
  isDarkMode: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 378px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`

const BottomContentHeader = styled.div<{
  isDarkMode: boolean
}>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ isDarkMode }) => (isDarkMode ? palette.GRAY500 : palette.GRAY200)};
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px 0;
`

const BottomContent = styled.div<{
  isDarkMode: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.WHITE)};
`

type RandomMatchingSheetProps = {
  title: string
  isDarkMode: boolean
}

const RandomMatchingSheet = ({ title, isDarkMode }: RandomMatchingSheetProps) => {
  const [isOpen, setIsOpen] = useState(true) // RandomMatchingSheet의 상태

  const handleWrapperClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const toggleRandomMatchingSheet = () => {
    // isOpen이 true일 때만 상태를 토글
    if (isOpen) {
      console.log('매칭 참가 취소')
      setIsOpen(!isOpen)
    }
  }

  const slideUp = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } },
    partiallyVisible: {
      y: '85%',
      opacity: 1,
      transition: { type: 'spring', damping: 15, stiffness: 100 },
    },
    exit: { y: '100%', opacity: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
  }
  return (
    <AnimatePresence>
      <Background onClick={toggleRandomMatchingSheet}>
        <BottomContentWrapper
          isDarkMode={isDarkMode}
          onClick={handleWrapperClick}
          initial={'hidden'} // 초기 상태
          animate={isOpen ? 'visible' : 'partiallyVisible'} // 상태에 따른 애니메이션 값 지정
          exit={'exit'} // 컴포넌트가 unmount될 때 상태
          variants={slideUp} // 애니메이션 정의
        >
          <BottomContent isDarkMode={isDarkMode}>
            <BottomContentHeader isDarkMode={isDarkMode}>
              <Text
                font={'Body_20'}
                fontWeight={700}
                letterSpacing={-1}
                style={{
                  color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
                  textAlign: 'center',
                  backgroundColor: isDarkMode ? palette.GRAY700 : palette.WHITE,
                  flex: 1,
                }}
              >
                {title}
              </Text>
              <AiOutlineClose
                style={{
                  position: 'absolute',
                  right: 17,
                  width: 30,
                  height: 30,
                  color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
                }}
                onClick={toggleRandomMatchingSheet}
              />
            </BottomContentHeader>
            <Timer
              totalTime={30000}
              isDarkMode={isDarkMode}
              timeOver={() => {
                console.log('타이머 종료!')
              }}
            />
            <RandomMatchingJoinButton
              isDarkMode={isDarkMode}
              moveToRandomMatching={() => {
                console.log('랜덤 매칭 참가')
              }}
            />
            <Text
              font={'Body_12'}
              fontWeight={700}
              letterSpacing={-1}
              style={{
                marginTop: 20,
                color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
              }}
            >
              {'현재 매칭에 참가하지 않으면 다음 매칭에 불이익이 있습니다.'}
            </Text>
          </BottomContent>
        </BottomContentWrapper>
      </Background>
    </AnimatePresence>
  )
}

export default RandomMatchingSheet

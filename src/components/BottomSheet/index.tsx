import styled from '@emotion/styled'
import { MouseEvent } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import RandomMatchingJoinButton from '@/components/common/Buttons/IconButton/RandomMatchingJoin'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import Timer from './Timer'

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const BottomContentWrapper = styled.div<{
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

const BottomSheetHeader = styled.div<{
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

type BottomSheetProps = {
  isDarkMode: boolean
}

const BottomSheet = ({ isDarkMode }: BottomSheetProps) => {
  const handleWrapperClick = (e: MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <Background
      onClick={() => {
        console.log('매칭 참가 취소')
      }}
    >
      <BottomContentWrapper isDarkMode={isDarkMode} onClick={handleWrapperClick}>
        <BottomContent isDarkMode={isDarkMode}>
          <BottomSheetHeader isDarkMode={isDarkMode}>
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
              {'매칭 참가하기'}
            </Text>
            <AiOutlineClose
              style={{
                position: 'absolute',
                right: 17,
                width: 30,
                height: 30,
                color: isDarkMode ? palette.DARK_WHITE : palette.BLACK,
              }}
              onClick={() => {
                console.log('매칭 참가 취소')
              }}
            />
          </BottomSheetHeader>
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
  )
}

export default BottomSheet

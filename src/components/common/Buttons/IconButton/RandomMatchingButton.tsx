import { BiChevronRight } from 'react-icons/bi'
import { PiTimerBold } from 'react-icons/pi'

import { Text, TextWrapper } from '@/components/common/Text'
import { palette } from '@/styles/palette'
import { getTimeDelta } from '@/utils/getTimeStamp'

import { StyleIconButtonWrapper, StyleIconWrapper } from '.'

type RandomMatchingButtonProps = {
  date: string
  isDarkMode: boolean
}

const RandomMatchingButton = ({ date, isDarkMode }: RandomMatchingButtonProps) => {
  const setButtonType = isDarkMode ? 'random-matching-dark' : 'random-matching'

  return (
    <StyleIconButtonWrapper
      iconButtonType={setButtonType}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <StyleIconWrapper
        backgroundColor={palette.GRAY100}
        borderRadius={'50%'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '18px 20px 18px 12px',
        }}
      >
        <PiTimerBold
          color={palette.GRAY600}
          style={{
            width: 20,
            height: 20,
          }}
        />
      </StyleIconWrapper>
      <TextWrapper
        style={{
          flex: 1,
        }}
      >
        <Text font={'Body_18'} fontWeight={500} letterSpacing={-2} style={{ marginBottom: 4 }}>
          {'랜덤매칭 시작하기'}
        </Text>
        <Text
          font={'Body_10'}
          fontWeight={500}
          letterSpacing={-0.5}
          style={{
            color: palette.WHITE,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {'마지막 채팅: '} {`${getTimeDelta(date)}`}
        </Text>
      </TextWrapper>
      <StyleIconWrapper
        style={{
          margin: '18px 5px 18px 0',
        }}
      >
        <BiChevronRight
          style={{
            width: 30,
            height: 30,
          }}
        />
      </StyleIconWrapper>
    </StyleIconButtonWrapper>
  )
}

export default RandomMatchingButton

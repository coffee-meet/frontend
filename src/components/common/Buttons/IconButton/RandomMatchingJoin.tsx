import { BiChevronRight } from 'react-icons/bi'

import { Text, TextWrapper } from '@/components/common/Text'

import { StyleIconButtonWrapper, StyleIconWrapper } from '.'

type RandomMatchingJoinButtonProps = {
  isDarkMode?: boolean
}

const RandomMatchingJoinButton = ({ isDarkMode }: RandomMatchingJoinButtonProps) => {
  const setButtonType = isDarkMode ? 'random-matching-join-dark' : 'random-matching-join'

  return (
    <StyleIconButtonWrapper
      iconButtonType={setButtonType}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TextWrapper
        style={{
          flex: 1,
        }}
      >
        <Text
          font={'Body_16'}
          fontWeight={500}
          letterSpacing={-2}
          style={{
            width: '100%',
            textAlign: 'right',
          }}
        >
          {'매칭방에 접속해주세요!'}
        </Text>
      </TextWrapper>
      <StyleIconWrapper
        style={{
          margin: '18px 5px 18px 40px',
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

export default RandomMatchingJoinButton

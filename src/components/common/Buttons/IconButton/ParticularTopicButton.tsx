import { BiChevronRight, BiSolidConversation } from 'react-icons/bi'

import { Text, TextWrapper } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import { StyleIconButtonWrapper, StyleIconWrapper } from '.'

type ParticularTopicButtonProps = {
  isDarkMode: boolean
}


/**
 * @param isDarkMode - 다크모드 여부
 */
const ParticularTopicButton = ({ isDarkMode }: ParticularTopicButtonProps) => {
  const getButtonType = isDarkMode ? 'particular-topic-dark' : 'particular-topic'
  const getIconColor = isDarkMode ? palette.DARK_WHITE : palette.GRAY600
  const getIconBackgroundColor = isDarkMode ? palette.DARK_ICON : palette.GRAY100
  const getSecondTextColor = isDarkMode ? palette.GRAY300 : palette.GRAY500

  return (
    <StyleIconButtonWrapper
      iconButtonType={getButtonType}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <StyleIconWrapper
        backgroundColor={getIconBackgroundColor}
        borderRadius={'50%'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '18px 33px 18px 27px',
        }}
      >
        <BiSolidConversation
          color={getIconColor}
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
          {'특정 주제로 대화하기'}
        </Text>
        <Text
          font={'Body_12'}
          fontWeight={500}
          letterSpacing={-1}
          style={{
            color: getSecondTextColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {'네트워크를 넓혀보세요!'}
        </Text>
      </TextWrapper>
      <StyleIconWrapper
        style={{
          margin: '18px 27px 18px 0',
        }}
      >
        <BiChevronRight
          style={{
            color: getIconColor,
            width: 30,
            height: 30,
          }}
        />
      </StyleIconWrapper>
    </StyleIconButtonWrapper>
  )
}

export default ParticularTopicButton

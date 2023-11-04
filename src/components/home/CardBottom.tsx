import styled from '@emotion/styled'

import { palette } from '@/styles/palette'

import { Text } from '../common/Text'

const StyleBottomHeader = styled.div<{
  isDarkMode: boolean
}>`
  display: flex;
  flex-direction: column;
  height: 63.525px;
  padding: 11px 18px 0px;
  border-top: 1px solid ${({ isDarkMode }) => (isDarkMode ? palette.GRAY500 : palette.GRAY100)};
`

type CardBottomProps = {
  isDarkMode: boolean
}

const CardBottom = ({ isDarkMode }: CardBottomProps) => {
  return (
    <StyleBottomHeader isDarkMode={isDarkMode}>
      <Text
        font={'Body_14'}
        fontWeight={500}
        letterSpacing={0}
        style={{
          flex: 1,
          color: isDarkMode ? palette.DARK_WHITE : palette.DARK_BLUE,
        }}
      >
        {'💡 Tip!'}
      </Text>
      <Text
        font={'Body_14'}
        fontWeight={500}
        letterSpacing={-1}
        style={{
          textAlign: 'center',
          color: isDarkMode ? palette.GRAY300 : palette.GRAY500,
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {'커피밋 채팅방은 3일이 지나면 사라집니다!'}
      </Text>
    </StyleBottomHeader>
  )
}

export default CardBottom
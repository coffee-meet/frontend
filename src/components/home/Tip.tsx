import styled from '@emotion/styled'

import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const StyleTipHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 63.525px;
  padding: 11px 18px 0px;
  border-top: 1px solid ${palette.GRAY200};
`

const Tip = () => {
  return (
    <StyleTipHeader>
      <Text
        font={'Body_14'}
        fontWeight={500}
        letterSpacing={0}
        style={{
          flex: 1,
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
          color: palette.GRAY500,
          flex: 1,
        }}
      >
        {'커피밋 채팅방은 3일이 지나면 사라집니다!'}
      </Text>
    </StyleTipHeader>
  )
}

export default Tip

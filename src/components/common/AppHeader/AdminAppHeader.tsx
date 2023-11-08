import styled from '@emotion/styled'
import { IoIosNotifications } from 'react-icons/io'

import { FlexBox } from '@/components/common/Flexbox'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const StyleAppHeader = styled.div<{ height?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${({ height }) => height};
  text-align: center;
  padding: 6.5% 5% 7%;
`

type AppHeaderProps = {
  nickname: string
  isDarkMode: boolean
  height?: string
}

/**
 * @param nickname - 유저 닉네임
 * @param isDarkMode - 다크모드 여부
 * @param height - 컴포넌트 높이
 */

const AdminAppHeader = ({ nickname, isDarkMode, height }: AppHeaderProps) => {
  return (
    <StyleAppHeader height={height}>
      <FlexBox
        justify={'flex-end'}
        style={{
          marginBottom: '26px',
        }}
      >
        <IoIosNotifications
          size={'24px'}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
            cursor: 'pointer',
          }}
          onClick={() => {}}
        />
      </FlexBox>
      <FlexBox align={'flex-end'}>
        <Text
          font={'Body_24'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
            marginRight: 5,
          }}
        >
          {nickname}
        </Text>
        <Text
          font={'Body_18'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            color: isDarkMode ? palette.DARK_WHITE : palette.WHITE,
          }}
        >
          {'님, 안녕하세요! 오늘도 즐거운 커피밋! ☕️'}
        </Text>
      </FlexBox>
    </StyleAppHeader>
  )
}

export default AdminAppHeader

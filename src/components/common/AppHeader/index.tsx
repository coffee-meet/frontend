import styled from '@emotion/styled'
import { BiSolidMoon } from 'react-icons/bi'
import { RiSunFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import Avatar from '@/components/common/Avatar'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import { FlexBox } from '../Flexbox'

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

const AppHeader = ({ nickname, isDarkMode, height }: AppHeaderProps) => {
  const navigate = useNavigate()
  const moveFromAppHeader = (path: string) => {
    navigate(`/${path}`)
  }

  return (
    <StyleAppHeader height={height}>
      <FlexBox
        justify={'space-between'}
        style={{
          marginBottom: '26px',
        }}
      >
        <Avatar
          width={49}
          height={49}
          imgUrl={''}
          margin={'0'}
          onClick={() => {
            moveFromAppHeader('profile')
          }}
        />
        {isDarkMode ? (
          <RiSunFill
            size={'20px'}
            style={{
              color: palette.WHITE,
            }}
          />
        ) : (
          <BiSolidMoon
            size={'20px'}
            style={{
              color: palette.DARK_WHITE,
            }}
          />
        )}
      </FlexBox>
      <FlexBox align={'flex-end'}>
        <Text
          font={'Body_24'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            color: isDarkMode ? palette.WHITE : palette.DARK_WHITE,
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
            color: isDarkMode ? palette.WHITE : palette.DARK_WHITE,
          }}
        >
          {'님, 안녕하세요! 오늘도 즐거운 커피밋! ☕️'}
        </Text>
      </FlexBox>
    </StyleAppHeader>
  )
}

export default AppHeader

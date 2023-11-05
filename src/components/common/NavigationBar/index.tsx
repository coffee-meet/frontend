import styled from '@emotion/styled'
import { IoChatbox } from 'react-icons/io5'
import { MdHome } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import defaultProfileImage from '@/assets/images/defaultProfileImage.png'
import Avatar from '@/components/common/Avatar'
import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

type NavigationBarProps = {
  isDarkMode: boolean
}

const NavigationBar = ({ isDarkMode }: NavigationBarProps) => {
  const navigate = useNavigate()
  const moveFromNavigationBar = (path: string) => {
    navigate(`/${path}`)
  }
  return (
    <StyledWrapper fullWidth={true}>
      <StyledNavigation isDarkMode={isDarkMode} justify={'space-around'}>
        <StyledNavigationItem onClick={() => moveFromNavigationBar('chat-list')}>
          <FlexBox direction={'column'} gap={5}>
            <IoChatbox
              size={'24px'}
              style={{
                color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
              }}
            />
            <StyledNavigationText isDarkMode={isDarkMode}>{'이전대화방'}</StyledNavigationText>
          </FlexBox>
        </StyledNavigationItem>
        <StyledNavigationItem onClick={() => moveFromNavigationBar('')}>
          <FlexBox direction={'column'} gap={5}>
            <MdHome
              size={'27px'}
              style={{
                color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
              }}
            />
            <StyledNavigationText isDarkMode={isDarkMode}>{'홈'}</StyledNavigationText>
          </FlexBox>
        </StyledNavigationItem>
        <StyledNavigationItem onClick={() => moveFromNavigationBar('profile')}>
          <FlexBox direction={'column'} gap={5}>
            <StyledProfileImageWrapper>
              <Avatar width={30} height={30} imgUrl={defaultProfileImage} margin={'0'} />
            </StyledProfileImageWrapper>
            <StyledNavigationText isDarkMode={isDarkMode}>{'프로필'}</StyledNavigationText>
          </FlexBox>
        </StyledNavigationItem>
      </StyledNavigation>
    </StyledWrapper>
  )
}
const StyledWrapper = styled(FlexBox)`
  position: sticky;
  bottom: 0px;
`
const StyledNavigationText = styled.span<{
  isDarkMode: boolean
}>`
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.DARK_BLUE)};
  font-size: ${typo.Body_10()};
`
const StyledNavigation = styled(FlexBox)<{
  isDarkMode: boolean
}>`
  width: 100%;
  height: 71px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY700 : palette.GRAY100)};
  box-shadow:
    0px 0px 10px 0px rgba(0, 0, 0, 0.24),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14);
`
const StyledNavigationItem = styled.button`
  cursor: pointer;
`
const StyledProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default NavigationBar

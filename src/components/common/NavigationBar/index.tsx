import styled from '@emotion/styled'
import { IoChatbox } from 'react-icons/io5'
import { MdHome } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import defaultProfileImage from '@/assets/images/defaultProfileImage.png'
import Avatar from '@/components/common/Avatar'
import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'
const NavigationBar = () => {
  const navigate = useNavigate()
  const moveFromNavigationBar = (path: string) => {
    navigate(`/${path}`)
  }
  return (
    <StyleWrapper fullWidth={true}>
      <StyleNavigation justify={'space-around'}>
        <StyleNavigationItem onClick={() => moveFromNavigationBar('chat-list')}>
          <FlexBox direction={'column'} gap={5}>
            <IoChatbox size={'24px'} />
            <StyleNavigationText>{'이전대화방'}</StyleNavigationText>
          </FlexBox>
        </StyleNavigationItem>
        <StyleNavigationItem onClick={() => moveFromNavigationBar('')}>
          <FlexBox direction={'column'} gap={5}>
            <MdHome size={'27px'} />
            <StyleNavigationText>{'홈'}</StyleNavigationText>
          </FlexBox>
        </StyleNavigationItem>
        <StyleNavigationItem onClick={() => moveFromNavigationBar('profile')}>
          <FlexBox direction={'column'} gap={5}>
            <StyleProfileImageWrapper>
              <Avatar width={30} height={30} imgUrl={defaultProfileImage} margin={'0'} />
            </StyleProfileImageWrapper>
            <StyleNavigationText>{'프로필'}</StyleNavigationText>
          </FlexBox>
        </StyleNavigationItem>
      </StyleNavigation>
    </StyleWrapper>
  )
}
const StyleWrapper = styled(FlexBox)`
  position: sticky;
  bottom: 0px;
`
const StyleNavigationText = styled.span`
  color: ${palette.GRAY600};
  font-size: ${typo.Body_10()};
`
const StyleNavigation = styled(FlexBox)`
  width: 100%;
  height: 71px;
  background-color: white;
  box-shadow:
    0px 0px 10px 0px rgba(0, 0, 0, 0.24),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14);
`
const StyleNavigationItem = styled.button`
  cursor: pointer;
`
const StyleProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default NavigationBar

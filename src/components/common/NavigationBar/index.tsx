import styled from '@emotion/styled'
import { IoChatbox } from 'react-icons/io5'
import { MdHome } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

import defaultProfileImage from '@/assets/images/defaultProfileImage.png'
import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'
const NavigationBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const moveFromNavigationBar = (path: string) => {
    navigate(`/${path}`)
  }
  return (
    <StyleWrapper fullWidth={true}>
      <StyleNavigation justify={'space-around'}>
        <StyleNavigationItem onClick={() => moveFromNavigationBar('chatlist')}>
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
        <StyleNavigationItem onClick={() => moveFromNavigationBar('profile/edit')}>
          <FlexBox direction={'column'} gap={5}>
            <StyleProfileImageWrapper>
              <StyleProfileImage src={defaultProfileImage}></StyleProfileImage>
            </StyleProfileImageWrapper>
            <StyleNavigationText>{'프로필'}</StyleNavigationText>
          </FlexBox>
        </StyleNavigationItem>
      </StyleNavigation>
    </StyleWrapper>
  )
}
const StyleWrapper = styled(FlexBox)`
  position: absolute;
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
    0px 0px 2px 0px rgba(0, 0, 0, 0.24),
    0px 4px 4px 0px rgba(0, 0, 0, 0.14);
`
const StyleNavigationItem = styled.button`
  cursor: pointer;
`
const StyleProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const StyleProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 70px;
  overflow: 'hidden';
`
export default NavigationBar

import styled from '@emotion/styled'
import { IoChatbox } from 'react-icons/io5'
import { MdHome } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'

import defaultProfileImage from '@/assets/images/defaultProfileImage.png'
import { palette } from '@/styles/palette'
import { theme } from '@/styles/theme'
import { typo } from '@/styles/typo'
const NavigationBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const moveFromNavigationBar = (path: string) => {
    navigate(`/${path}`)
  }
  return (
    <StyleWrapper>
      <StyleNavigationItem onClick={() => moveFromNavigationBar('chatlist')}>
        <IoChatbox size={'24px'} />
      </StyleNavigationItem>
      <StyleNavigationItem onClick={() => moveFromNavigationBar('')}>
        <MdHome size={'27px'} />
        {/* <StyleNavigationText>{'홈'}</StyleNavigationText> */}
      </StyleNavigationItem>
      <StyleNavigationItem onClick={() => moveFromNavigationBar('profile/edit')}>
        <StyleProfileImage>
          <img src={defaultProfileImage} width={30} height={30}></img>
        </StyleProfileImage>
      </StyleNavigationItem>
    </StyleWrapper>
  )
}
const StyleWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
`
// const StyleNavigationText = styled.span`
//   font-size: ${typo.Caption_9};
//   color: ${palette.GRAY600};
// `
const StyleNavigationItem = styled.div``
const StyleProfileImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 70%;
  overflow: hidden;
`
export default NavigationBar

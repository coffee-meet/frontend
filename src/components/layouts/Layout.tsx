import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

import { theme } from '@/styles/theme'

const Layout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  position: relative;
  max-width: 414px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.palette.GRAY200};
`

export default Layout

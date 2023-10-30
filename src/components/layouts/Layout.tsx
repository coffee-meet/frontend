import 'react-toastify/dist/ReactToastify.css'

import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Modal from '@/components/common/Modal'
import { theme } from '@/styles/theme'

const Layout = () => {
  return (
    <MainContainer>
      <Modal />
      <Outlet />
      <ToastContainer />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  position: relative;
  max-width: 480px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.palette.GRAY200};
`

export default Layout

import { Route, Routes } from 'react-router-dom'

import LoginPending from '@/pages/loginPending/LoginPending'
const LoginPendingPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LoginPending />}>
        {' '}
      </Route>
    </Routes>
  )
}

export default LoginPendingPage

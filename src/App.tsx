import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layouts/Layout'
import AdminPage from '@/pages/admin'
import AdminLoginPage from '@/pages/admin/AdminLogin'
import ChatListPage from '@/pages/chatList'
import ChattingPage from '@/pages/chatting'
import HomePage from '@/pages/home'
import LandingPage from '@/pages/landing'
import LoginPage from '@/pages/login'
import LoginPendingPage from '@/pages/loginPending'
import NotFoundPage from '@/pages/notFound/NotFound'
import ProfilePage from '@/pages/profile'
import PrivateRoute from '@/pages/redirect/PrivateRoute'
import RegisterPage from '@/pages/register'

import AdminInquiry from './pages/admin/AdminInquiry'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute auth={true} />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/profile/*'} element={<ProfilePage />} />
          <Route path={'/chatting'} element={<ChattingPage />} />
          <Route path={'/chat-list'} element={<ChatListPage />} />
          <Route path={'*'} element={<NotFoundPage />}></Route>
        </Route>

        <Route element={<PrivateRoute auth={true} />}>
          <Route path={'/landing'} element={<LandingPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/login-pending-page'} element={<LoginPendingPage />} />
          <Route path={'/register/*'} element={<RegisterPage />} />
          <Route path={'/admin-login'} element={<AdminLoginPage />} />
          <Route path={'*'} element={<NotFoundPage />}></Route>
        </Route>

        <Route element={<PrivateRoute auth={true} superAuth={true} />}>
          <Route path={'/admin/*'} element={<AdminPage />}></Route>
          <Route path={'/admin/inquiry'} element={<AdminInquiry />}></Route>
          <Route path={'*'} element={<NotFoundPage />}></Route>
        </Route>
        <Route path={'*'} element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App

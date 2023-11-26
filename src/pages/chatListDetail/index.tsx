import { Route, Routes } from 'react-router-dom'

import ChatListDetail from '@/pages/chatListDetail/ChatListDetail'

const chatListDetailPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<ChatListDetail />}></Route>
    </Routes>
  )
}

export default chatListDetailPage

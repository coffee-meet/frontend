import { Route, Routes } from 'react-router-dom'

import ChatList from '@/pages/chatList/ChatList'

const ChatListPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<ChatList />}></Route>
    </Routes>
  )
}

export default ChatListPage

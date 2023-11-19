import { Route, Routes } from 'react-router-dom'

import AdminMain from '@/pages/admin/AdminMain'

const AdminPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<AdminMain />}></Route>
    </Routes>
  )
}
export default AdminPage

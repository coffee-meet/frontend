import { Route, Routes } from 'react-router-dom'

import AdminLogin from '@/pages/admin/AdminLogin'

const AdminLoginPage = () => {
  return (
    <Routes>
      <Route path={'/'} element={<AdminLogin />}></Route>
    </Routes>
  )
}
export default AdminLoginPage

import { Route, Routes } from 'react-router-dom'

import RegisterCompany from '@/pages/register/RegisterCompany'
import RegisterUser from '@/pages/register/RegisterUser'

const RegisterPage = () => {
  return (
    <Routes>
      <Route path={'/user'} element={<RegisterUser />}></Route>
      <Route path={'/company'} element={<RegisterCompany />}></Route>
    </Routes>
  )
}
export default RegisterPage

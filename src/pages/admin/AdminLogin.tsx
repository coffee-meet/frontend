// import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

// import AdminLoginAPI from '@/apis/adminLogin/AdminLoginApi'
const AdminLogin = () => {
  // form 제출 -> API 요청 -> 결과값에 따라 페이지 이동
  // const { data, isSuccess } = useQuery(['AdminLogin'], AdminLoginAPI.POST_ADMIN_LOGIN)
  // const adminLoginResultInfo = data

  const { register, handleSubmit } = useForm()
  const [adminData, setAdminData] = useState('')
  return (
    <form onSubmit={handleSubmit((adminData) => setAdminData(JSON.stringify(adminData)))}>
      <input {...register('adminId')} placeholder={'Admin ID'} />
      <input {...register('adminPassword')} placeholder={'Admin Password'} />
      <p>{adminData}</p>
      <input type={'submit'} />
    </form>
  )
}
export default AdminLogin

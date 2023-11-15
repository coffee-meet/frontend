import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import AdminLoginAPI from '@/apis/adminLogin/AdminLoginApi'

const AdminLogin = () => {
  // form 제출 -> API 요청 -> 결과값에 따라 페이지 이동
  const mutation = useMutation(AdminLoginAPI.POST_ADMIN_LOGIN)

  const onSubmit2 = (adminData: string) => {
    mutation.mutate(JSON.parse(adminData))
  }

  const { register, handleSubmit } = useForm()
  const [adminData, setAdminData] = useState('')
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setAdminData(JSON.stringify(data))
        onSubmit2(adminData)
      })}
    >
      <input {...register('adminId')} placeholder={'Admin ID'} />
      <input {...register('adminPassword')} placeholder={'Admin Password'} />
      <p>{adminData}</p>
      <input type={'submit'} />
    </form>
  )
}
export default AdminLogin

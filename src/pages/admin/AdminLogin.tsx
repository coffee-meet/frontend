import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import AdminLoginAPI from '@/apis/adminLogin/AdminLoginApi'

const AdminLogin = () => {
  // form 제출 -> API 요청 -> 결과값에 따라 페이지 이동
  const mutation = useMutation(AdminLoginAPI.POST_ADMIN_LOGIN, {
    onSuccess: (data) => {
      if (data.adminLoginInfo.adminLoginResult == 'error') {
        window.location.assign(`/admin`)
      }
    },
  })

  const onSubmitAdminLoginData = (AdminLoginData: string) => {
    mutation.mutate(JSON.parse(AdminLoginData))
  }

  const { register, handleSubmit } = useForm()
  const [adminData, setAdminData] = useState('')
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setAdminData(JSON.stringify(data))
        onSubmitAdminLoginData(adminData)
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

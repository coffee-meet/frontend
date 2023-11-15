import { useState } from 'react'
import { useForm } from 'react-hook-form'
const AdminLogin = () => {
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

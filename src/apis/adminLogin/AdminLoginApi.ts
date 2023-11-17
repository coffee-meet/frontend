import { axiosAPI } from '@/apis/axios'

interface AdminLoginData {
  adminId: string
  adminPw: string
}

const AdminLoginAPI = {
  POST_ADMIN_LOGIN: async (adminLoginData: AdminLoginData) => {
    const response = await axiosAPI.post('/admin/login', adminLoginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  },
}

export default AdminLoginAPI

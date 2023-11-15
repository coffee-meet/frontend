import { axiosAPI } from '@/apis/axios'

interface AdminLoginData {
  adminId: string
  adminPassword: string
}

const AdminLoginAPI = {
  POST_ADMIN_LOGIN: async (adminLoginData: AdminLoginData) => {
    const response = await axiosAPI.post(`/admin/login`, adminLoginData)
    return {
      data: response.data,
    }
  },
}

export default AdminLoginAPI

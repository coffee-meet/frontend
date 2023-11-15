import { axiosAPI } from '@/apis/axios'

const AdminLoginAPI = {
  POST_ADMIN_LOGIN: async () => {
    const response = await axiosAPI.post(`/admin/login`)
    return {
      data: response.data,
    }
  },
}

export default AdminLoginAPI

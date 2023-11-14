import { axiosAPI } from '@/apis/axios'

const AdminApprovalAPI = {
  GET_APPROVAL_REQUEST_LIST: async () => {
    const response = await axiosAPI.get(`/admin/approvals`)
    return {
      data: response.data,
    }
  },
}

export default AdminApprovalAPI

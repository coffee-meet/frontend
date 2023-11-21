import { axiosAPI } from '@/apis/axios'

const AdminApprovalAPI = {
  GET_APPROVAL_REQUEST_LIST: async () => {
    const response = await axiosAPI.get(`/v1/users/approvals`)
    return {
      data: response.data,
    }
  },
  GET_APPROVAL_INFO: async () => {
    const response = await axiosAPI.get(`/v1/useres/inquries/:inquryId`)
    return {
      data: response.data,
    }
  },
  POST_APPROVAL_ACCEPT: async () => {
    const response = await axiosAPI.post(
      '/v1/certification/users/:userId/accept',
      { decision: 'accept' },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  },
  POST_APPROVAL_REJECT: async () => {
    const response = await axiosAPI.post(
      '/v1/certification/users/:userId/reject',
      { decision: 'reject' },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  },
}

export default AdminApprovalAPI

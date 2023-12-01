import { axiosAPI } from '@/apis/axios'

// interface ApprovalRequestList {
//   certificationId: number
//   nickname: string
//   companyName: string
//   companyEmail: string
//   businessCardUrl: string
//   department: string
// }
const GET_APPROVAL_LIST_PARAMS = {
  offset: '0',
  size: '10',
}

const AdminApprovalAPI = {
  GET_APPROVAL_REQUEST_LIST: async () => {
    const response = await axiosAPI.get(`/v1/admins/certifications/pending`, {
      params: GET_APPROVAL_LIST_PARAMS,
    })
    return {
      data: response.data,
    }
  },
  GET_APPROVAL_INFO: async () => {
    const response = await axiosAPI.get(`/v1/admins/certifications/pending`, {
      params: GET_APPROVAL_LIST_PARAMS,
    })
    return {
      data: response.data,
    }
  },
  // certificationId: string
  // ${certificationId}
  POST_APPROVAL_ACCEPT: async () => {
    const response = await axiosAPI.patch(`/v1/admins/certifications/approval`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  },
  // certificationId: string
  // /${certificationId}
  POST_APPROVAL_REJECT: async () => {
    const response = await axiosAPI.post(
      `/v1/admins/certifications/rejection`,
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

import { axiosAPI } from '@/apis/axios'

const GET_INQUIRY_LIST_PARAMS = {
  lastInquiryId: 0,
}

const AdminInquiryAPI = {
  GET_INQUIRY_LIST: async () => {
    const response = await axiosAPI.get(`/v1/admins/inquiries`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: GET_INQUIRY_LIST_PARAMS,
    })
    return {
      data: response.data,
    }
  },
  GET_INQUIRY_INFO: async () => {
    const response = await axiosAPI.get(`/v1/useres/inquries/:inquryId`)
    return {
      data: response.data,
    }
  },
}

export default AdminInquiryAPI

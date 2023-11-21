import { axiosAPI } from '@/apis/axios'

const AdminInquiryAPI = {
  GET_INQUIRY_LIST: async () => {
    const response = await axiosAPI.get(`/v1/users/inquiries`)
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

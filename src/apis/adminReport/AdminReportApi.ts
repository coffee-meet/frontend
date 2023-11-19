import { axiosAPI } from '@/apis/axios'

const AdminReportAPI = {
  GET_REPORT_LIST: async () => {
    const response = await axiosAPI.get(`/api/v1/reports`)
    return {
      data: response.data,
    }
  },
  GET_REPORT_INFO: async () => {
    const response = await axiosAPI.get(`/api/v1/reports/:reportId`)
    return {
      data: response.data,
    }
  },
}

export default AdminReportAPI

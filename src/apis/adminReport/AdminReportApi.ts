import { axiosAPI } from '@/apis/axios'

const AdminReportAPI = {
  GET_REPORT_LIST: async () => {
    const response = await axiosAPI.get(`/v1/reports`)
    return {
      data: response.data,
    }
  },
  GET_REPORTERS_LIST: async () => {
    const response = await axiosAPI.get(`/v1/reporters`)
    return {
      data: response.data,
    }
  },
  GET_REPORT_INFO: async () => {
    const response = await axiosAPI.get(`/v1/reports/:reportId`)
    return {
      data: response.data,
    }
  },
  POST_REPORT_ADD: async () => {
    const response = await axiosAPI.post(
      '/v1/reports/accept/:reportId',
      { decision: 'addReportCount' },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  },
  POST_REPORT_IGNORE: async () => {
    const response = await axiosAPI.delete('/v1/reports/reject/:reportId')
    return response.data
  },
}

export default AdminReportAPI

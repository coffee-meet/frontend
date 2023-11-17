import { axiosAPI } from '@/apis/axios'

const AdminReportAPI = {
  GET_REPORT_LIST: async () => {
    const response = await axiosAPI.get(`/admin/reports`)
    return {
      data: response.data,
    }
  },
}

export default AdminReportAPI

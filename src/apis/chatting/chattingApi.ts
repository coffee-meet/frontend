import { axiosAPI } from '@/apis/axios'
import { Messages } from '@/apis/chatting/chattingType'

export const ChattingApi = {
  GET_DETAIL_MESSAGES: async (): Promise<Messages[]> => {
    const response = await axiosAPI.get(`/v1/chatrooms/1/messages`)
    return response.data
  },
}

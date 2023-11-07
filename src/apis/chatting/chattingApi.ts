import { axiosAPI } from '@/apis/axios'
import { Messages } from '@/apis/chatting/chattingType'

export const ChattingApi = {
  GET_DETAIL_MESSAGES: async (chatroomId: string): Promise<Messages[]> => {
    const response = await axiosAPI.get(`/api/v1/chatrooms/${chatroomId}/messages`)
    return response.data
  },
}

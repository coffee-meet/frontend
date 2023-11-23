import { axiosAPI } from '@/apis/axios'

const ChatListApi = {
  // TODO: zustand로 AccessToken 받아서 요청하기 (백엔드 개발 완료 후)
  GET_CHAT_LIST: async () => {
    const response = await axiosAPI.get(`/v1/histories`)
    return response.data
  },
}

export default ChatListApi

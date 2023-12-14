import { axiosAPI } from "@/apis/axios";
import type { Messages } from "@/apis/chatting/chattingType";

export const ChattingApi = {
  GET_DETAIL_MESSAGES: async (chatroomId: string): Promise<Messages[]> => {
    const response = await axiosAPI.get(`/v1/chatting/rooms/${chatroomId}`);
    return response.data;
  },
};

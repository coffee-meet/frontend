import axios from "axios";
import useAuthStore from "@/store/AuthStore.tsx";

export const axiosAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `${useAuthStore.getState().authTokens?.accessToken}`,
  },
});

// TODO: axiosAPI.interceptors.response.use()를 사용하여 refreshToken이 만료되었을 때, accessToken을 재발급 받는 로직을 구현해야 합니다.

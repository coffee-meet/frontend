import axios from 'axios'

export const testWithBtn = async (nickname: string) => {
  return axios
    .create({
      baseURL: import.meta.env.VITE_TEST_URL,
    })
    .get('/api/v1/users/duplicate', {
      params: {
        nickname: nickname,
      },
    })
}

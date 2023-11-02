import axios from 'axios'

export const testWithBtn = async (nickname: string) => {
  return axios.get(`http://13.125.194.230/api/v1/users/duplicate`, {
    headers: {
      'Referrer-Policy': 'no-referrer', // 또는 필요에 따라 다른 값
    },
    params: {
      nickname,
    },
  })
}

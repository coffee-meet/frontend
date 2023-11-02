import axios from 'axios'

export const testWithBtn = async (nickname: string) => {
  return axios.get(`http://13.125.194.230/api/v1/users/duplicate?nickname=${nickname}`)
}

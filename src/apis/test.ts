import axios from 'axios'

export const testWithBtn = async (nickname: string) => {
  return axios.get(`https://api.coffee-meet.site/api/v1/users/duplicate?nickname=${nickname}`)
}

import { axiosAPI } from '@/apis/axios.ts'

const getEmailValid = async (userId: string, code: string) => {
  try {
    const res = await axiosAPI.post(`/v1/certification/users/me/company-mail/verification`, {
      userId: userId,
      verificationCode: code,
    })
    if (res.status !== 200) {
      throw new Error('get email valid failed!')
    }
    return res
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default getEmailValid

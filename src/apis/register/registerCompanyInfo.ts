import { axiosAPI } from '@/apis/axios.ts'

const registerCompanyInfo = async (body: object) => {
  try {
    const res = await axiosAPI.post('/v1/certification/users/me/company-info', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (res.status !== 200) {
      throw new Error('register company info failed!')
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default registerCompanyInfo

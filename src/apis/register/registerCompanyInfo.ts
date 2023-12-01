import { axiosAPI } from '@/apis/axios.ts'

/**
 * 회사 정보 등록 / 변경
 * @param body 회사 정보
 * @param isUpdate 회사 정보 변경인지 여부
 */
const registerCompanyInfo = async (body: object, isUpdate: boolean) => {
  try {
    if (isUpdate) {
      const res = await axiosAPI.post('/v1/certification/users/me/company-info', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (res.status !== 200) {
        throw new Error('register company info failed!')
      }
    } else {
      const res = await axiosAPI.post('/v1/certification/users/me/company-info/update', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (res.status !== 200) {
        throw new Error('update company info failed!')
      }
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default registerCompanyInfo

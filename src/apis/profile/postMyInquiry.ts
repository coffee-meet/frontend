import { axiosAPI } from '@/apis/axios.ts'

const postMyInquiry = async (title: string, content: string) => {
  try {
    const res = await axiosAPI.post('/v1/inquiries', {
      title: title,
      content: content,
    })
    if (res.status !== 200) {
      throw new Error('post my inquiry failed!')
    }
    return res
  } catch (err) {
    console.log(err)
    throw err
  }
}

export default postMyInquiry

import axios from 'axios'

import useAuthStore from '@/store/AuthStore'

export const axiosAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5173'
      : import.meta.env.VITE_BASE_URL,
})

// Add a request interceptor
axiosAPI.interceptors.request.use(
  function (config) {
    // 요청 바로 직전
    // axios 설정값에 대해 작성합니다.
    // const { authTokens } = useAuthStore()
    // config.headers['Authorization'] = `Bearer ${authTokens}`

    return config
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosAPI.interceptors.response.use(
  function (response) {
    /*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다.
        .then() 으로 이어집니다.
    */
    return response
  },

  function (error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.
    */
    if (error.response && error.response.status === 401) {
      return new Promise(() => {}) //이행되지 않은 Promise를 반환하여 Promise Chaining 끊어주기
    }
    return Promise.reject(error)
  },
)

// Response interceptor
// function interceptorResponseFulfilled(res: AxiosResponse) {
//   if (200 <= res.status && res.status < 300) {
//     return res
//   }

//   return Promise.reject(res)
// }

// function interceptorResponseRejected(error: AxiosError<ApiErrorScheme>) {
//   if (error.response?.data?.message) {
//     return Promise.reject(new ApiException(error.response.data, error.response.status))
//   }
// }

// axiosAPI.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected)

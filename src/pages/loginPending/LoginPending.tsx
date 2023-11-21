import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

import { axiosAPI } from '@/apis/axios'
import { BASE_URL } from '@/pages/login/Login.tsx'
import useAuthStore from '@/store/AuthStore'
import { palette } from '@/styles/palette'

const LoginPending = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const authCode = searchParams.get('code')
  const setToken = useAuthStore((state) => state.setAuthTokens)
  const provider = useAuthStore((state) => state.provider)
  const { isNewUser, setIsNewUser } = useAuthStore()
  const routeAuthInfo = async () => {
    await axiosAPI
      .get(`/v1/users/login/${provider}?authCode=${authCode}`)
      .then((res) => {
        console.log(res.data.accessToken)
        localStorage.setItem('jwt', res.data.accessToken)
        localStorage.setItem('nickname', res.data.nickname)

        setToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        })
        navigate('/')
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log('카카오 로그인 완료 & 정보 등록 안됨')
          setIsNewUser(true)
          window.location.replace(`${BASE_URL}/v1/oauth2.0/${provider}`)
        }
      })
  }
  useEffect(() => {
    routeAuthInfo()
  }, [])

  return (
    <StyledLoginPending>
      <PulseLoader
        size={10}
        speedMultiplier={0.3}
        cssOverride={{
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </StyledLoginPending>
  )
}

const StyledLoginPending = styled.div`
  background-color: ${palette.SKY_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default LoginPending

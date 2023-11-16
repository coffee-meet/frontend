import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

import { axiosAPI } from '@/apis/axios'
import useAuthStore from '@/store/AuthStore'
import { palette } from '@/styles/palette'

const LoginPending = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const authCode = searchParams.get('code')
  const setToken = useAuthStore((state) => state.setAuthTokens)
  const provider = useAuthStore((state) => state.provider)

  const routeAuthInfo = async () => {
    await axiosAPI
      .get(`${import.meta.env.VITE_BASE_URL}/v1/users/login/${provider}?authCode=${authCode}`)
      .then((res) => {
        console.log(res.data.accessToken)
        localStorage.setItem('jwt', res.data.accessToken)
        localStorage.setItem('nickname', res.data.nickname)
        setToken({
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        })
      })
      .catch((err) => {
        if (err.response.status === 404) {
          navigate('/register/user', { state: { authCode } })
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

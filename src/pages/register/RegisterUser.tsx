import { useLocation } from 'react-router-dom'

const Register = () => {
  const location = useLocation()
  const { authCode } = location.state || {}

  console.log(authCode)
  return <div>{'Register'}</div>
}

export default Register

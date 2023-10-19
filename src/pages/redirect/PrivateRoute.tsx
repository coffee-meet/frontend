import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = {
  auth: boolean
  superAuth?: boolean
}

const PrivateRoute = ({ auth }: PrivateRouteProps) => {
  const isLogin = localStorage.getItem('isLogin')

  if (auth) {
    return isLogin === null || isLogin == 'false' ? <Navigate to={'/login'} /> : <Outlet />
  } else {
    return isLogin === null || isLogin == 'false' ? <Outlet /> : <Navigate to={'/'} />
  }
}

export default PrivateRoute

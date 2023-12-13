import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  auth: boolean;
  superAuth?: boolean;
};

type LoginStatus = "true" | "false";

const PrivateRoute = ({ auth }: PrivateRouteProps) => {
  const isLogin: LoginStatus = "true";

  if (auth) {
    return isLogin !== "true" ? <Navigate to={"/login"} /> : <Outlet />;
  } else {
    return isLogin !== "true" ? <Outlet /> : <Navigate to={"/"} />;
  }
};

export default PrivateRoute;

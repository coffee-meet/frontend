import { Route, Routes } from "react-router-dom";
import Login from "@/pages/login/Login";

const LoginPage = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Login />}
      >
        {" "}
      </Route>
    </Routes>
  );
};

export default LoginPage;

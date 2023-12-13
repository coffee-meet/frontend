import { Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";

const HomePage = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home />}
      >
        {" "}
      </Route>
    </Routes>
  );
};

export default HomePage;

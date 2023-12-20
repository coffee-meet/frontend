import { Route, Routes } from "react-router-dom";
import Landing from "@/pages/landing/Landing";

const LandingPage = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Landing />}
      >
        {" "}
      </Route>
    </Routes>
  );
};

export default LandingPage;

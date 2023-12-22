import { Route, Routes } from "react-router-dom";
import ProfileCompanyEdit from "@/pages/profile/ProfileCompanyEdit";
import ProfileDefault from "@/pages/profile/ProfileDefault";
import ProfileEdit from "@/pages/profile/ProfileEdit";
import ProfileHelpDesk from "@/pages/profile/ProfileHelpDesk";

const ProfilePage = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<ProfileDefault />}
      />

      <Route
        path={"/edit"}
        element={<ProfileEdit />}
      ></Route>
      <Route
        path={"/privacy"}
        element={<ProfileCompanyEdit />}
      ></Route>
      <Route
        path={"/help-desk"}
        element={<ProfileHelpDesk />}
      ></Route>
    </Routes>
  );
};
export default ProfilePage;

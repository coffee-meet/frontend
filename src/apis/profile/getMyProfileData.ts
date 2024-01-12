import { axiosAPI } from "@/apis/axios.ts";
import type { MyProfileData } from "@/apis/profile/type.ts";

const getMyProfileData = async () => {
  try {
    const res = await axiosAPI.get<MyProfileData>("/v1/users/me");
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getMyProfileData;

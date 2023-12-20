import { axiosAPI } from "@/apis/axios.ts";
import type { MyProfileData } from "@/apis/profile/type.ts";

const getMyProfileData = async () => {
  try {
    const res = await axiosAPI.get<MyProfileData>("/v1/users/me");
    if (res.status !== 200) {
      throw new Error("get my profile data failed!");
    }
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getMyProfileData;

import { axiosAPI } from "@/apis/axios.ts";
import type { MyProfileUpdateRequest } from "@/apis/profile/type.ts";

const updateMyProfile = async (data: MyProfileUpdateRequest) => {
  try {
    const res = await axiosAPI.patch("/v1/users/me", data);
    if (res.status !== 200) {
      throw new Error("update my profile failed!");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default updateMyProfile;

import { axiosAPI } from "@/apis/axios.ts";

export type UserInfoType = {
  userId: string;
  nickname: string;
  keywords: string[];
};

export const registerUserInfo = async (userInfo: UserInfoType) => {
  try {
    const res = await axiosAPI.post("/v1/users/sign-up", userInfo);
    if (res.status !== 200) {
      throw new Error("register user info failed!");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

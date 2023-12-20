import { axiosAPI } from "@/apis/axios.ts";

const getNicknameValid = async (nickname: string) => {
  try {
    const res = await axiosAPI.get(`/v1/users/duplicate?nickname=${nickname}`);
    if (res.status !== 200) {
      throw new Error("nickname valid check failed!");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getNicknameValid;

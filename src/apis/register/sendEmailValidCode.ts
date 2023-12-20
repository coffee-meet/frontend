import { axiosAPI } from "@/apis/axios.ts";

const sendEmailValidCode = async (email: string, userId: string) => {
  try {
    const res = await axiosAPI.post(`/v1/certification/users/me/company-mail`, {
      userId: userId,
      companyEmail: email,
    });
    if (res.status !== 200) {
      throw new Error("send email valid code failed!");
    }
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default sendEmailValidCode;

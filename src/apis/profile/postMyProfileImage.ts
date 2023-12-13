import { axiosAPI } from "@/apis/axios.ts";

const postMyProfileImage = async (formData: FormData) => {
  try {
    const res = await axiosAPI.post("/v1/users/me/profile-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status !== 200) {
      throw new Error("post my profile image failed!");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default postMyProfileImage;

import getMyProfileData from "@/apis/profile/getMyProfileData.ts";

export const getMyProfileDataOptions = {
  queryKey: ["myProfileData"],
  queryFn: getMyProfileData,
};

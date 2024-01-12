export type MyProfileUpdateRequest = {
  nickname: string;
  interests: string[];
};

export type MyProfileData = {
  nickname: string;
  profileImageUrl: string;
  companyName: string;
  department: string;
  interests: string[];
  oAuthProvider: string;
};

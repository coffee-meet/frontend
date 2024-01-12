import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { UserInfoStateType } from "@/schemas/userInfo";
import { UserInfoSchema } from "@/schemas/userInfo";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import postMyProfileImage from "@/apis/profile/postMyProfileImage.ts";
import updateMyProfile from "@/apis/profile/updateMyProfile.ts";
import getNicknameValid from "@/apis/register/getNicknameValid.ts";
import AlertText from "@/components/common/AlertText";
import Avatar from "@/components/common/Avatar";
import BackChevron from "@/components/common/BackChevron";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { FlexBox } from "@/components/common/Flexbox";
import GradationBackground from "@/components/common/GradationBackground";
import MultiSelector from "@/components/common/MultiSelector";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import RegisterInput from "@/components/common/RegisterInput";
import Spacing from "@/components/common/Spacing";
import useToast from "@/hooks/useToast.tsx";
import { palette } from "@/styles/palette.ts";
import { typo } from "@/styles/typo.ts";
import useThemeStore from "@/store/ThemeStore.tsx";
import { InterestList } from "@/constants/index.ts";

const ProfileEdit = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null);
  const [imgSrc, setImgSrc] = useState("default_image_url");
  const { showToast } = useToast();
  const navigate = useNavigate();
  const userInfoForm = useForm<UserInfoStateType>({
    resolver: zodResolver(UserInfoSchema),
  });
  const queryClient = useQueryClient();

  // const data = queryClient.getQueryData(["myProfileData"]);

  const checkNicknameDuplicated = (nickname: string) => {
    if (nickname.length === 0) {
      showToast({
        message: "닉네임을 입력하세요!",
        type: "warning",
        isDarkMode,
      });
      return;
    }
    getNicknameValid(nickname)
      .then(() => {
        setNicknameDuplicated(false);
      })
      .catch(() => {
        setNicknameDuplicated(true);
      });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files?.[0];
    reader.onloadend = () => {
      setImgSrc(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("profileImage", file);
      postMyProfileImage(formData)
        .then(async () => {
          showToast({
            message: "프로필 이미지가 수정되었습니다.",
            type: "success",
            isDarkMode,
          });
          await queryClient.invalidateQueries({ queryKey: ["myProfileData"] });
          await queryClient.refetchQueries({ queryKey: ["myProfileData"] });
        })
        .catch(() => {
          showToast({
            message: "프로필 이미지 수정에 실패했습니다.",
            type: "error",
            isDarkMode,
          });
        });
    }
  };

  const handleUpdateProfile = (data: UserInfoStateType) => {
    if (nicknameDuplicated) {
      showToast({
        message: "닉네임 중복검사를 해주세요!",
        type: "warning",
        isDarkMode,
      });
      return;
    }

    const updateData = {
      nickname: data.nickname,
      interests: data.interest,
    };
    updateMyProfile(updateData)
      .then(async () => {
        showToast({
          message: "프로필이 수정되었습니다.",
          type: "success",
          isDarkMode,
        });
        await queryClient.invalidateQueries({ queryKey: ["myProfileData"] });
        await queryClient.refetchQueries({ queryKey: ["myProfileData"] });
        navigate("/profile");
      })
      .catch(() => {
        showToast({
          message: "프로필 수정에 실패했습니다.",
          type: "error",
          isDarkMode,
        });
      });
  };

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <Spacing size={50} />
      <PageContainer
        height={"80%"}
        isDarkMode={isDarkMode}
      >
        <FlexBox direction={"column"}>
          <StyledPageHeader
            title={"프로필 수정"}
            leftIcon={
              <BackChevron
                hasBackground={true}
                isDarkMode={isDarkMode}
              />
            }
            isDarkMode={isDarkMode}
            hasBackground={true}
          />
          <Spacing size={70} />
          <Avatar
            width={80}
            height={80}
            imgUrl={imgSrc}
          />
          <Spacing size={20} />
          <label htmlFor={"profile-image-upload"}>
            <ChangeProfileImageLink>{"프로필 사진 변경"}</ChangeProfileImageLink>
          </label>
          <ProfileImageInput
            type={"file"}
            id={"profile-image-upload"}
            accept={"image/jpeg, image/jpg, image/png"}
            onChange={handleImageUpload}
          />
          <Spacing size={30} />
          <form onSubmit={userInfoForm.handleSubmit(handleUpdateProfile)}>
            <SectionLabelText width={390}>{"닉네임"}</SectionLabelText>
            <FlexBox gap={10}>
              <RegisterInput
                width={240}
                placeholder={"닉네임 (10자 제한)"}
                {...userInfoForm.register("nickname")}
              />
              <NormalButton
                normalButtonType={"nickname-duplicate"}
                onClick={(event) => {
                  event.preventDefault();
                  checkNicknameDuplicated(userInfoForm.getValues("nickname") ?? "");
                }}
              >
                {"중복확인"}
              </NormalButton>
            </FlexBox>

            {nicknameDuplicated === false && (
              <AlertText
                padding={"10px"}
                textAlign={"end"}
                fontSize={`11px`}
                fontColor={`${palette.PRIMARY}`}
              >
                {"사용 가능한 닉네임입니다."}
              </AlertText>
            )}

            {nicknameDuplicated === true && (
              <AlertText
                padding={"10px"}
                textAlign={"end"}
                fontSize={`11px`}
                fontColor={`${palette.RED}`}
              >
                {"이미 사용 중인 닉네임입니다."}
              </AlertText>
            )}

            {userInfoForm.formState.errors.nickname && (
              <AlertText
                padding={"10px"}
                textAlign={"end"}
                fontSize={`11px`}
                fontColor={`${palette.RED}`}
              >
                {userInfoForm.formState.errors.nickname.message}
              </AlertText>
            )}
            <Spacing size={44} />
            <SectionLabelText>{"관심사"}</SectionLabelText>
            <FlexBox direction={"column"}>
              <Controller
                name={"interest"}
                control={userInfoForm.control}
                render={({ field }) => (
                  <MultiSelector
                    isDarkMode={isDarkMode}
                    itemList={InterestList}
                    maxCount={3}
                    onValueChange={field.onChange}
                  />
                )}
              />
              <Spacing size={30} />
              <NormalButton normalButtonType={"form-submit"}>{"프로필 수정"}</NormalButton>
              <Spacing size={20} />
            </FlexBox>
          </form>
        </FlexBox>
      </PageContainer>
    </GradationBackground>
  );
};

const StyledPageHeader = styled(PageHeader)`
  padding: 0 18px;
`;
export const SectionLabelText = styled.div<{ width?: number }>`
  width: ${(props) => props.width}px;
  padding: 10px;
  margin-left: 25px;
  font-size: ${typo.Body_16()};
  color: ${palette.GRAY400};
`;

const ChangeProfileImageLink = styled.div`
  font-size: ${typo.Body_12()};
  justify-content: center;
  cursor: pointer;
  color: ${palette.PRIMARY};
  font-weight: 600;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

export default ProfileEdit;

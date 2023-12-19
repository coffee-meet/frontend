import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import getMyProfileData from "@/apis/profile/getMyProfileData.ts";
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
import useInterestStore from "@/store/InterestStore.tsx";
import useThemeStore from "@/store/ThemeStore.tsx";

const ProfileEdit = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { interestList } = useInterestStore();
  const inputRef = useRef<HTMLInputElement>(null);
  let nickname = "";
  const [doubleChecked, setDoubleChecked] = useState<null | boolean>(false);
  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null);
  const [imgSrc, setImgSrc] = useState("");
  const { showToast } = useToast();
  const navigate = useNavigate();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["myProfileData"],
    queryFn: getMyProfileData,
  });

  if (isLoading) {
    return <div>{"로딩중..."}</div>;
  }
  if (error) {
    return <div>{"에러가 발생했습니다."}</div>;
  }

  const handleNicknameValidCheck = (nickname: string) => {
    getNicknameValid(nickname)
      .then(() => {
        setDoubleChecked(true);
        setNicknameDuplicated(false);
      })
      .catch(() => {
        setDoubleChecked(true);
        setNicknameDuplicated(true);
      });
  };

  const doubleCheckNickName = async () => {
    if (inputRef.current !== null && inputRef.current.value.length == 0) {
      setDoubleChecked(null);
      return;
    }
    if (inputRef.current !== null) {
      nickname = inputRef.current.value;
      handleNicknameValidCheck(nickname);
    }
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
        .then(() => {
          imgSrc && localStorage.setItem("profileImageUrl", imgSrc);
          showToast({
            message: "프로필 이미지가 수정되었습니다.",
            type: "success",
            isDarkMode,
          });
          refetch();
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

  const handleUpdateProfile = () => {
    if (doubleChecked === false || nicknameDuplicated === null) {
      showToast({
        message: "닉네임 중복검사를 해주세요!",
        type: "warning",
        isDarkMode,
      });
      return;
    }
    if (inputRef.current !== null) {
      const updateData = {
        nickname: inputRef.current.value,
        interests: interestList,
      };
      updateMyProfile(updateData)
        .then(() => {
          inputRef.current && localStorage.setItem("nickname", inputRef.current.value);
          showToast({
            message: "프로필이 수정되었습니다.",
            type: "success",
            isDarkMode,
          });
          navigate("/profile");
        })
        .catch(() => {
          showToast({
            message: "프로필 수정에 실패했습니다.",
            type: "error",
            isDarkMode,
          });
        });
    }
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
            imgUrl={data?.profileImageUrl ?? imgSrc}
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
          <SectionLabelText width={390}>{"닉네임"}</SectionLabelText>
          <FlexBox gap={10}>
            <RegisterInput
              width={240}
              placeholder={"닉네임"}
              ref={inputRef}
            />
            <NormalButton
              normalButtonType={"nickname-duplicate"}
              onClick={doubleCheckNickName}
            >
              {"중복확인"}
            </NormalButton>
          </FlexBox>
        </FlexBox>
        {nicknameDuplicated === null && doubleChecked === null && (
          <AlertText
            padding={"10px"}
            textAlign={"end"}
            fontSize={`11px`}
            fontColor={`${palette.RED}`}
          >
            {"닉네임 중복검사를 해주세요!"}
          </AlertText>
        )}
        {nicknameDuplicated === false && doubleChecked && (
          <AlertText
            padding={"10px"}
            textAlign={"end"}
            fontSize={`11px`}
            fontColor={`${palette.PRIMARY}`}
          >
            {"사용 가능한 닉네임입니다."}
          </AlertText>
        )}
        {nicknameDuplicated === true && doubleChecked && (
          <AlertText
            padding={"10px"}
            textAlign={"end"}
            fontSize={`11px`}
            fontColor={`${palette.RED}`}
          >
            {"이미 사용 중인 닉네임입니다."}
          </AlertText>
        )}
        <Spacing size={44} />
        <SectionLabelText>{"관심사"}</SectionLabelText>
        <FlexBox direction={"column"}>
          <MultiSelector
            isDarkMode={isDarkMode}
            itemList={interestList}
            maxCount={3}
          />
          <Spacing size={30} />
          <NormalButton
            normalButtonType={"form-submit"}
            onClick={handleUpdateProfile}
          >
            {"프로필 수정"}
          </NormalButton>
          <Spacing size={20} />
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

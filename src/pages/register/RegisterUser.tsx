import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdWbSunny } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import type { UserInfoStateType } from "@/schemas/userInfo";
import { UserInfoSchema } from "@/schemas/userInfo";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { axiosAPI } from "@/apis/axios";
import getNicknameValid from "@/apis/register/getNicknameValid.ts";
import AlertText from "@/components/common/AlertText";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { FlexBox } from "@/components/common/Flexbox";
import MultiSelector from "@/components/common/MultiSelector";
import RegisterInput from "@/components/common/RegisterInput";
import Spacing from "@/components/common/Spacing";
import useToast from "@/hooks/useToast";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";
import useThemeStore from "@/store/ThemeStore";
import { InterestList } from "@/constants/index.ts";

const RegisterUser = () => {
  const navigate = useNavigate();
  const userId = useLocation().state.userId;

  const [doubleChecked, setDoubleChecked] = useState<null | boolean>(false);
  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null);
  const { showToast } = useToast();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const userInfoForm = useForm<UserInfoStateType>({
    resolver: zodResolver(UserInfoSchema),
  });

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

  const doubleCheckNickName = async (nickName: string) => {
    if (nickName.length == 0) {
      setDoubleChecked(null);
      return;
    }
    handleNicknameValidCheck(nickName);
  };

  const formValidation = (nickName: string) => {
    if (nickName.length === 0) {
      showToast({
        message: "닉네임을 입력하세요!",
        type: "warning",
        isDarkMode,
      });
      return false;
    } else if (!doubleChecked) {
      showToast({
        message: "중복검사를 해주세요!",
        type: "warning",
        isDarkMode,
      });
      return false;
    } else if (nicknameDuplicated) {
      showToast({
        message: "사용할 수 없는 닉네임입니다.",
        type: "warning",
        isDarkMode,
      });
      return false;
    } else {
      return true;
    }
  };
  const submitUserProfileData = (data: UserInfoStateType) => {
    console.log(data);
    if (formValidation(data.nickname)) {
      const body = {
        userId: userId,
        nickname: data.nickname,
        keywords: data.interest,
      };
      registerMutation.mutate(body);
    }
  };
  const registerPost = async (body: object) => {
    return await axiosAPI.post("/v1/users/sign-up", body);
  };

  const registerMutation = useMutation({
    mutationFn: (body: object) => registerPost(body),
    onSuccess: () => {
      showToast({
        message: "닉네임, 관심사 정보 등록을 완료했습니다!",
        type: "success",
        isDarkMode,
      });

      navigate("/register/company", { state: { userId: userId } });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <StyleRegisterWrapper>
      <StyleRegisterHeader>
        <Spacing size={64} />
        <FlexBox
          gap={10}
          fullWidth={true}
          justify={"space-around"}
        >
          <span></span>
          <StyleHeaderText>{"프로필 등록"} </StyleHeaderText>
          <StyleIcon>
            <MdWbSunny
              size={20}
              color={palette.TERTIARY}
            />
          </StyleIcon>
        </FlexBox>
        <Spacing size={11} />
        <StyleDivider />
      </StyleRegisterHeader>
      <Spacing size={73} />
      <form onSubmit={userInfoForm.handleSubmit(submitUserProfileData)}>
        <FlexBox gap={16}>
          <Controller
            name={"nickname"}
            control={userInfoForm.control}
            render={({ field }) => (
              <RegisterInput
                width={260}
                placeholder={"닉네임"}
                onChange={field.onChange}
              />
            )}
          />
          <NormalButton
            normalButtonType={"nickname-duplicate"}
            onClick={() => doubleCheckNickName(userInfoForm.getValues("nickname"))}
          >
            {"중복확인"}
          </NormalButton>
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
        <StyleInterestText>{"관심사"}</StyleInterestText>
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
        </FlexBox>
        <StyleSubmitButtonWrapper>
          <NormalButton normalButtonType={"form-submit"}>{"다음"}</NormalButton>
        </StyleSubmitButtonWrapper>
      </form>
    </StyleRegisterWrapper>
  );
};
const StyleRegisterWrapper = styled.div`
  background-color: ${palette.GRAY100};
  height: 100%;
`;
const StyleRegisterHeader = styled.div``;
const StyleHeaderText = styled.span`
  font-size: ${typo.Body_24()};
`;
const StyleDivider = styled.hr`
  height: 1px;
  background-color: ${palette.GRAY200};
  border: 0;
`;
const StyleInterestText = styled.div`
  padding: 10px;
  margin-left: 25px;
  font-size: ${typo.Body_18()};
`;
const StyleSubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 22px;
`;
const StyleIcon = styled.button`
  cursor: pointer;
`;
export default RegisterUser;

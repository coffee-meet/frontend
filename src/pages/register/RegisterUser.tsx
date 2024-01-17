import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiSolidMoon } from "react-icons/bi";
import { RiSunFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import type { UserInfoStateType } from "@/schemas/userInfo";
import { UserInfoSchema } from "@/schemas/userInfo";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
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

  const [doubleChecked, setDoubleChecked] = useState<null | boolean>(false);
  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null);
  const { showToast } = useToast();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

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
    if (formValidation(data.nickname)) {
      const userInfo = {
        nickname: data.nickname,
        keywords: data.interest,
      };
      navigate("/register/company", { state: { ...userInfo } });
    }
  };

  return (
    <StyleRegisterWrapper isDarkMode={isDarkMode}>
      <StyleRegisterHeader>
        <Spacing size={64} />
        <FlexBox
          fullWidth={true}
          justify={"flex-end"}
        >
          <StyleHeaderText isDarkMode={isDarkMode}>{"프로필 등록"} </StyleHeaderText>
          <StyleIcon>
            {isDarkMode ? (
              <RiSunFill
                size={"20px"}
                style={{
                  color: palette.TERTIARY,
                  cursor: "pointer",
                }}
                onClick={toggleDarkMode}
              />
            ) : (
              <BiSolidMoon
                size={"20px"}
                style={{
                  color: palette.TERTIARY,
                  cursor: "pointer",
                }}
                onClick={toggleDarkMode}
              />
            )}
          </StyleIcon>
        </FlexBox>
        <Spacing size={11} />
        <StyleDivider isDarkMode={isDarkMode} />
      </StyleRegisterHeader>
      <Spacing size={73} />
      <form onSubmit={userInfoForm.handleSubmit(submitUserProfileData)}>
        <StyleSectionText isDarkMode={isDarkMode}>{"닉네임"}</StyleSectionText>
        <FlexBox gap={10}>
          <RegisterInput
            width={240}
            placeholder={"닉네임 (10자 제한)"}
            isDarkMode={isDarkMode}
            {...userInfoForm.register("nickname")}
          />
          <NormalButton
            normalButtonType={isDarkMode ? "nickname-duplicate-dark" : "nickname-duplicate"}
            onClick={(event) => {
              event.preventDefault();
              doubleCheckNickName(userInfoForm.getValues("nickname"));
            }}
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
        <StyleSectionText isDarkMode={isDarkMode}>{"관심사"}</StyleSectionText>
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
const StyleRegisterWrapper = styled.div<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_BLUE : palette.GRAY100)};
  height: 100%;
`;
const StyleRegisterHeader = styled.div``;
const StyleHeaderText = styled.span<{ isDarkMode: boolean }>`
  margin: 0 auto;
  font-size: ${typo.Body_24()};
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.BLACK)};
`;
const StyleDivider = styled.hr<{ isDarkMode: boolean }>`
  height: 1px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY600 : palette.GRAY200)};
  border: 0;
`;
const StyleSectionText = styled.div<{ isDarkMode: boolean }>`
  padding: 10px;
  margin-left: 25px;
  font-size: ${typo.Body_18()};
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.BLACK)};
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
  position: absolute;
  margin-right: 40px;
`;
export default RegisterUser;

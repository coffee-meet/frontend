import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiSolidMoon } from "react-icons/bi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import type { CompanyInfoStateType } from "@/schemas/companyInfo.ts";
import { CompanyInfoSchema } from "@/schemas/companyInfo.ts";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import getEmailValid from "@/apis/register/getEmailValid.ts";
import registerCompanyInfo from "@/apis/register/registerCompanyInfo.ts";
import type { UserInfoType } from "@/apis/register/registerUserInfo.ts";
import { registerUserInfo } from "@/apis/register/registerUserInfo.ts";
import sendEmailValidCode from "@/apis/register/sendEmailValidCode.ts";
import AlertText from "@/components/common/AlertText";
import BackChevron from "@/components/common/BackChevron";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { FlexBox } from "@/components/common/Flexbox";
import MultiSelector from "@/components/common/MultiSelector";
import RegisterInput from "@/components/common/RegisterInput";
import Spacing from "@/components/common/Spacing";
import useToast from "@/hooks/useToast";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";
import useAuthStore from "@/store/AuthStore.tsx";
import useThemeStore from "@/store/ThemeStore";
import { JobList } from "@/constants/index.ts";

const RegisterCompany = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const userId = useAuthStore((state) => state.userId);
  const userInfo: Omit<UserInfoType, "userId"> = useLocation().state;
  const [isCodeSame, setIsCodeSame] = useState<null | boolean>(null);
  const [codeChecked, setCodeChecked] = useState<null | boolean>(null);
  const [uploadedURL, setUploadedURL] = useState("");

  const companyInfoForm = useForm<CompanyInfoStateType>({
    resolver: zodResolver(CompanyInfoSchema),
  });
  const cardPreview = companyInfoForm.watch("businessCard");

  useEffect(() => {
    if (cardPreview && cardPreview.length > 0) {
      const url = URL.createObjectURL(cardPreview[0]);
      setUploadedURL(url);
    }
  }, [cardPreview]);

  const handleClickEmailVerify = async (email: string) => {
    if (!email) {
      showToast({
        message: "이메일을 입력해주세요.",
        type: "warning",
      });
      return;
    }
    showToast({
      message: "메일로 인증코드가 전송되었습니다.",
      type: "info",
    });
    return await sendEmailValidCode(email, userId.toString());
  };

  //이메일 인증 버튼 누르면 실행되는 함수
  const handleEmailCertification = (email: string) => {
    email && handleClickEmailVerify(email);
  };

  //인증 코드 입력하고 확인 버튼 누르면 실행되는 함수
  const checkCodeValid = async (code: string) => {
    if (!code) {
      showToast({
        message: "인증코드를 입력해주세요.",
        type: "warning",
      });
      return;
    }
    setCodeChecked(true);
    const response = await getEmailValid(userId.toString(), code);
    if (response.status == 200) {
      setIsCodeSame(true);
    } else {
      setIsCodeSame(false);
    }
  };

  const handleCheckEmailCertification = () => {
    if (!codeChecked) {
      showToast({
        message: "인증코드가 확인되지 않았습니다. ",
        type: "warning",
      });
      return false;
    } else if (!isCodeSame) {
      showToast({
        message: "인증코드가 일치하지 않습니다. ",
        type: "warning",
      });
      return false;
    }
    return true;
  };

  const handleCompleteSignupProcess = async (data: CompanyInfoStateType) => {
    if (!handleCheckEmailCertification()) {
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId.toString());
    formData.append("companyName", data.companyName);
    formData.append("companyEmail", data.companyEmail);
    formData.append("department", data.department[0]);
    formData.append("businessCard", data.businessCard[0]);

    try {
      await registerUserInfo({ userId: userId.toString(), ...userInfo });
      await registerCompanyInfo(formData, false);
      showToast({
        message: "회원 가입 완료! 다시 로그인 해주세요!",
        type: "success",
      });
      navigate("/login");
    } catch (error) {
      showToast({
        message: "회원 가입에 실패했습니다.",
        type: "error",
      });
    }
  };

  return (
    <StyleRegisterWrapper isDarkMode={isDarkMode}>
      <StyleRegisterHeader>
        <Spacing size={64} />
        <FlexBox
          gap={10}
          fullWidth={true}
          justify={"space-around"}
        >
          <StyleIcon>
            <BackChevron
              hasBackground={true}
              isDarkMode={isDarkMode}
              prevClick={() => {
                navigate("/register/user");
              }}
            />
          </StyleIcon>
          <StyleHeaderText isDarkMode={isDarkMode}>{"회사 인증"}</StyleHeaderText>
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
        <StyleDivider isDarkMode={isDarkMode} />
      </StyleRegisterHeader>
      <Spacing size={13} />
      <form onSubmit={companyInfoForm.handleSubmit(handleCompleteSignupProcess)}>
        <StyleDataWrapper>
          <FlexBox
            gap={16}
            direction={"column"}
          >
            <FlexBox gap={16}>
              <RegisterInput
                width={310}
                placeholder={"회사 명"}
                isDarkMode={isDarkMode}
                {...companyInfoForm.register("companyName")}
              />
            </FlexBox>
            <div>
              {companyInfoForm.formState.errors.companyName && (
                <AlertText
                  fontSize={`11px`}
                  fontColor={`${palette.RED}`}
                  padding={"10px"}
                  textAlign={"end"}
                >
                  {companyInfoForm.formState.errors.companyName.message}
                </AlertText>
              )}
            </div>
            <FlexBox gap={16}>
              <RegisterInput
                width={220}
                placeholder={"회사 이메일"}
                isDarkMode={isDarkMode}
                {...companyInfoForm.register("companyEmail")}
              />
              <NormalButton
                normalButtonType={isDarkMode ? "email-certify-dark" : "email-certify"}
                onClick={(event) => {
                  event.preventDefault();
                  handleEmailCertification(companyInfoForm.getValues("companyEmail"));
                }}
              >
                {"이메일 인증"}
              </NormalButton>
            </FlexBox>
            <div>
              {companyInfoForm.formState.errors.companyEmail && (
                <AlertText
                  fontSize={`11px`}
                  fontColor={`${palette.RED}`}
                  padding={"10px"}
                  textAlign={"end"}
                >
                  {companyInfoForm.formState.errors.companyEmail.message}
                </AlertText>
              )}
            </div>
          </FlexBox>
          <Spacing size={16} />
          <FlexBox
            gap={16}
            style={{
              position: "relative",
            }}
          >
            <RegisterInput
              width={313}
              placeholder={"인증코드 6자리 입력"}
              isDarkMode={isDarkMode}
              {...companyInfoForm.register("certCode")}
            />
            <StyleVerificationEmailButton
              onClick={(event) => {
                event.preventDefault();
                checkCodeValid(companyInfoForm.getValues("certCode"));
              }}
            >
              {"확인"}
            </StyleVerificationEmailButton>
          </FlexBox>
          <Spacing size={10} />
          {codeChecked && isCodeSame && (
            <AlertText
              fontSize={`11px`}
              fontColor={`${palette.PRIMARY}`}
              padding={"10px"}
              textAlign={"end"}
            >
              {"인증 코드가 확인되었습니다."}
            </AlertText>
          )}
          {codeChecked && !isCodeSame && (
            <AlertText
              fontSize={`11px`}
              fontColor={`${palette.RED}`}
              padding={"10px"}
              textAlign={"end"}
            >
              {"인증 코드가 일치하지 않습니다."}
            </AlertText>
          )}

          <Spacing size={13} />
          <StyleSectionText isDarkMode={isDarkMode}>{"직무정보"}</StyleSectionText>
          <FlexBox direction={"column"}>
            <Controller
              name={"department"}
              control={companyInfoForm.control}
              render={({ field }) => (
                <MultiSelector
                  isDarkMode={isDarkMode}
                  itemList={JobList}
                  maxCount={1}
                  onValueChange={field.onChange}
                />
              )}
            />
            <div>
              {companyInfoForm.formState.errors.department && (
                <AlertText
                  fontSize={`11px`}
                  fontColor={`${palette.RED}`}
                  padding={"10px"}
                  textAlign={"end"}
                >
                  {companyInfoForm.formState.errors.department.message}
                </AlertText>
              )}
            </div>
          </FlexBox>
          <Spacing size={10} />

          <FlexBox
            gap={0}
            direction={"column"}
          >
            <StyleText isDarkMode={isDarkMode}> {"명함을 업로드 해주세요!"}</StyleText>
            <label htmlFor={"business-card-input"}>
              <StyleImageCard isDarkMode={isDarkMode}>
                {uploadedURL ? (
                  <img
                    src={uploadedURL}
                    alt={"사용자가 업로드 한 이미지"}
                    style={{ width: "auto", height: "100%" }}
                  />
                ) : (
                  <MdOutlinePhotoCamera size={50} />
                )}
              </StyleImageCard>
            </label>
            <input
              id={"business-card-input"}
              type={"file"}
              accept={"image/jpg, image/jpeg, image/png"}
              style={{ display: "none" }}
              {...companyInfoForm.register("businessCard")}
            />
            <div>
              {companyInfoForm.formState.errors.businessCard && (
                <AlertText
                  fontSize={`11px`}
                  fontColor={`${palette.RED}`}
                  padding={"10px"}
                  textAlign={"end"}
                >
                  {companyInfoForm.formState.errors.businessCard.message?.toString()}
                </AlertText>
              )}
            </div>
          </FlexBox>
        </StyleDataWrapper>
        <Spacing size={20} />
        <StyleSubmitButtonWrapper>
          <NormalButton normalButtonType={"form-submit"}>{"등록 완료"}</NormalButton>
        </StyleSubmitButtonWrapper>
        <Spacing size={20} />
      </form>
    </StyleRegisterWrapper>
  );
};

const StyleRegisterWrapper = styled.div<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_BLUE : palette.GRAY100)};
  height: 100%;
  overflow: scroll;
`;
const StyleDataWrapper = styled.div``;
const StyleImageCard = styled.div<{ isDarkMode: boolean }>`
  width: 250px;
  height: 150px;
  background: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY600 : palette.WHITE)};
  border: 1px dashed ${palette.GRAY600};
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const StyleRegisterHeader = styled.div``;
const StyleHeaderText = styled.span<{ isDarkMode: boolean }>`
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
  position: relative;
`;
const StyleText = styled.div<{ isDarkMode: boolean }>`
  font-size: ${typo.Body_12()};
  margin: 10px;
  color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_WHITE : palette.BLACK)};
`;
const StyleIcon = styled.button`
  cursor: pointer;
`;

export const StyleVerificationEmailButton = styled.button`
  width: 42px;
  height: 25px;
  background-color: ${palette.TERTIARY};
  position: absolute;
  right: 45px;
  color: ${palette.WHITE};
  border-radius: 10px;
  font-size: 12px;
  font-family: "Pretendard-Regular";
  letter-spacing: -1px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;
export default RegisterCompany;

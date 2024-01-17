import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { CompanyInfoStateType } from "@/schemas/companyInfo.ts";
import { CompanyInfoSchema } from "@/schemas/companyInfo.ts";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import type { MyProfileData } from "@/apis/profile/type.ts";
import getEmailValid from "@/apis/register/getEmailValid.ts";
import registerCompanyInfo from "@/apis/register/registerCompanyInfo.ts";
import sendEmailValidCode from "@/apis/register/sendEmailValidCode.ts";
import { SectionLabelText } from "@/pages/profile/ProfileEdit.tsx";
import { StyleVerificationEmailButton } from "@/pages/register/RegisterCompany.tsx";
import AlertText from "@/components/common/AlertText";
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
import useAuthStore from "@/store/AuthStore.tsx";
import useThemeStore from "@/store/ThemeStore.tsx";
import { JobList } from "@/constants/index.ts";

const ProfileCompanyEdit = () => {
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const userId = useAuthStore((state) => state.userId);
  const [isCodeSame, setIsCodeSame] = useState<null | boolean>(null);
  const [codeChecked, setCodeChecked] = useState<null | boolean>(null);
  const [uploadedURL, setUploadedURL] = useState("");
  const { showToast } = useToast();

  const companyInfoForm = useForm<CompanyInfoStateType>({
    resolver: zodResolver(CompanyInfoSchema),
  });
  const cardPreview = companyInfoForm.watch("businessCard");

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MyProfileData>(["myProfileData"]);

  const handleVerifyEmail = async (email: string) => {
    if (!email) {
      showToast({ message: "이메일을 입력해주세요! ", type: "warning", isDarkMode });
      return;
    }
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
      return;
    }
    showToast({ message: "인증코드가 전송되었습니다! ", type: "success", isDarkMode });
    return await sendEmailValidCode(email, userId.toString());
  };

  const handleVerifyCode = async (code: string) => {
    if (!code) {
      showToast({ message: "인증코드를 입력해주세요! ", type: "warning", isDarkMode });
      return;
    }
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
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

  useEffect(() => {
    if (cardPreview && cardPreview.length > 0) {
      const url = URL.createObjectURL(cardPreview[0]);
      setUploadedURL(url);
    }
  }, [cardPreview]);

  const handleChangeCompanyInfo = (data: CompanyInfoStateType) => {
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
      return;
    }
    if (!codeChecked) {
      showToast({ message: "인증코드가 확인되지 않았습니다! ", type: "warning", isDarkMode });
      return;
    }
    if (!isCodeSame) {
      showToast({ message: "인증코드가 일치하지 않습니다! ", type: "warning", isDarkMode });
      return;
    }
    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("companyEmail", data.companyEmail);
    formData.append("department", data.department[0]);
    formData.append("businessCard", data.businessCard[0]);

    registerCompanyInfo(formData, true)
      .then(() => {
        showToast({
          message: "회사 정보 변경 완료!",
          type: "success",
          isDarkMode: false,
        });
        navigate("/profile");
      })
      .catch(() => {
        showToast({
          message: "회사 정보 변경에 실패했습니다.",
          type: "error",
          isDarkMode: false,
        });
      });
  };

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <Spacing size={50} />
      <PageContainer
        isDarkMode={isDarkMode}
        height={"80%"}
      >
        <FlexBox direction={"column"}>
          <StyledPageHeader
            title={"회사 정보 변경"}
            leftIcon={
              <BackChevron
                hasBackground={true}
                isDarkMode={isDarkMode}
              />
            }
            isDarkMode={isDarkMode}
            hasBackground={true}
          />
          <Spacing size={20} />
          <form onSubmit={companyInfoForm.handleSubmit(handleChangeCompanyInfo)}>
            <SectionLabelText width={390}>{"회사 이름"}</SectionLabelText>
            <RegisterInput
              width={343}
              placeholder={"회사 이름"}
              defaultValue={data?.companyName}
              isDarkMode={isDarkMode}
              {...companyInfoForm.register("companyName")}
            />
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
            <Spacing size={20} />
            <SectionLabelText width={390}>{"이메일"}</SectionLabelText>
            <FlexBox gap={10}>
              <RegisterInput
                width={260}
                placeholder={"회사 이메일"}
                isDarkMode={isDarkMode}
                {...companyInfoForm.register("companyEmail")}
              />
              <NormalButton
                normalButtonType={"email-certify"}
                onClick={(event) => {
                  event.preventDefault();
                  handleVerifyEmail(companyInfoForm.getValues("companyEmail"));
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
            <Spacing size={16} />
            <FlexBox
              gap={16}
              style={{
                position: "relative",
              }}
            >
              <RegisterInput
                width={343}
                placeholder={"인증코드 6자리 입력"}
                isDarkMode={isDarkMode}
                {...companyInfoForm.register("certCode")}
              />
              <StyleVerificationEmailButton
                onClick={(event) => {
                  event.preventDefault();
                  handleVerifyCode(companyInfoForm.getValues("certCode"));
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
            <Spacing size={20} />
            <FlexBox
              gap={10}
              direction={"column"}
            >
              <SectionLabelText width={390}>{"직무정보"}</SectionLabelText>
              <Controller
                name={"department"}
                control={companyInfoForm.control}
                render={({ field }) => (
                  <MultiSelector
                    isDarkMode={isDarkMode}
                    itemList={JobList}
                    maxCount={1}
                    defaultSelectedList={[data?.department?.toString() ?? ""]}
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
            <Spacing size={20} />
            <FlexBox
              gap={10}
              direction={"column"}
            >
              <SectionLabelText width={390}>{"명함"}</SectionLabelText>
              <label htmlFor={"card-image-upload"}>
                {uploadedURL ? (
                  <StyleImageCard
                    src={uploadedURL}
                    alt={"명함 이미지"}
                  />
                ) : (
                  <CardImageFallback>
                    <div>{"명함 이미지를 선택해주세요."}</div>
                  </CardImageFallback>
                )}
              </label>
              <CardImageInput
                type={"file"}
                id={"card-image-upload"}
                accept={"image/jpeg, image/jpg, image/png"}
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
              <NormalButton normalButtonType={"form-submit"}>
                {"회사 정보 변경 요청하기"}
              </NormalButton>
            </FlexBox>
            <Spacing size={25} />
          </form>
          <Spacing size={20} />
        </FlexBox>
      </PageContainer>
    </GradationBackground>
  );
};

const StyledPageHeader = styled(PageHeader)`
  padding: 0 18px;
`;

const StyleImageCard = styled.img`
  width: 250px;
  height: 150px;
  background: ${palette.WHITE};
  border: 1px dashed ${palette.GRAY600};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  /* @media (max-width: 786px) {
    width: 90vw;
    height: 50vh;
  } */
`;

const CardImageInput = styled.input`
  display: none;
`;

const CardImageFallback = styled.div`
  width: 250px;
  height: 150px;
  background: ${palette.WHITE};
  border: 1px dashed ${palette.GRAY600};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

export default ProfileCompanyEdit;

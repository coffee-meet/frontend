import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
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
import useThemeStore from "@/store/ThemeStore.tsx";
import { JobList } from "@/constants/index.ts";

const ProfileCompanyEdit = () => {
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const codeRef = useRef<HTMLInputElement>(null);
  const [isCodeSame, setIsCodeSame] = useState<null | boolean>(null);
  const [codeChecked, setCodeChecked] = useState<null | boolean>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState<File>();
  const { showToast } = useToast();

  const handleVerifyEmail = async () => {
    if (!emailRef.current?.value) {
      showToast({ message: "이메일을 입력해주세요! ", type: "warning", isDarkMode });
      return;
    }
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
      return;
    }
    sendEmailValidCode(emailRef.current.value, userId);
    showToast({ message: "인증코드가 전송되었습니다! ", type: "success", isDarkMode });
  };

  const handleVerifyCode = async () => {
    if (!codeRef.current?.value) {
      showToast({ message: "인증코드를 입력해주세요! ", type: "warning", isDarkMode });
      return;
    }
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
      return;
    }
    setCodeChecked(true);
    getEmailValid(userId, codeRef.current.value)
      .then(() => {
        setIsCodeSame(true);
      })
      .catch(() => {
        setIsCodeSame(false);
      });
  };

  const onUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.target.files?.[0];
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleChangeCompanyInfo = () => {
    if (!userId) {
      showToast({ message: "로그인이 필요합니다! ", type: "warning", isDarkMode });
      return;
    }
    if (!codeChecked) {
      showToast({ message: "인증코드가 확인되지 않았습니다! ", type: "warning", isDarkMode });
      return;
    } else if (!isCodeSame) {
      showToast({ message: "인증코드가 일치하지 않습니다! ", type: "warning", isDarkMode });
      return;
    } else if (!imageFile) {
      showToast({ message: "명함 이미지를 선택해주세요! ", type: "warning", isDarkMode });
      return;
    }
    const formData = new FormData();
    formData.append("companyName", nameRef.current?.value || "");
    formData.append("companyEmail", emailRef.current?.value || "");
    formData.append("department", jobInfo);
    formData.append("businessCard", imageFile);

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
          <SectionLabelText width={390}>{"회사 이름"}</SectionLabelText>
          <RegisterInput
            width={343}
            placeholder={"회사 이름"}
            ref={nameRef}
          />
          <Spacing size={20} />
          <SectionLabelText width={390}>{"이메일"}</SectionLabelText>
          <FlexBox gap={10}>
            <RegisterInput
              width={260}
              placeholder={"회사 이메일"}
              ref={emailRef}
            />
            <NormalButton
              normalButtonType={"email-certify"}
              onClick={handleVerifyEmail}
            >
              {"이메일 인증"}
            </NormalButton>
          </FlexBox>
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
              ref={codeRef}
            />
            <StyleVerificationEmailButton onClick={handleVerifyCode}>
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
          <SectionLabelText width={390}>{"직무정보"}</SectionLabelText>
          <MultiSelector
            isDarkMode={isDarkMode}
            itemList={JobList}
            maxCount={1}
          />
          <Spacing size={20} />
          <SectionLabelText width={390}>{"명함"}</SectionLabelText>
          <label htmlFor={"card-image-upload"}>
            {/*<StyleImageCard src={imageSrc || businessCardExample} alt={'명함 이미지'} />*/}
            {imageSrc ? (
              <StyleImageCard
                src={imageSrc}
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
            onChange={onUploadImage}
          />
          <Spacing size={25} />
          <NormalButton
            normalButtonType={"form-submit"}
            onClick={handleChangeCompanyInfo}
          >
            {"회사 정보 변경 요청하기"}
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

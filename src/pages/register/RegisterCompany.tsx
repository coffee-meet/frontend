import type { RefObject } from "react";
import { useRef, useState } from "react";
import { MdOutlinePhotoCamera, MdWbSunny } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import getEmailValid from "@/apis/register/getEmailValid.ts";
import registerCompanyInfo from "@/apis/register/registerCompanyInfo.ts";
import sendEmailValidCode from "@/apis/register/sendEmailValidCode.ts";
import AlertText from "@/components/common/AlertText";
import BackChevron from "@/components/common/BackChevron";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { FlexBox } from "@/components/common/Flexbox";
import RegisterInput from "@/components/common/RegisterInput";
import SelectorButtonContainer from "@/components/common/SelectorButtonContainer";
import Spacing from "@/components/common/Spacing";
import useToast from "@/hooks/useToast";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";
import useJobStore from "@/store/JobStore.tsx";
import useThemeStore from "@/store/ThemeStore";

export const JobList = [
  "경영",
  "영업",
  "물류",
  "IT",
  "디자인",
  "전문직",
  "미디어",
  "생산",
  "연구",
  "기획",
  "광고",
  "의약",
  "유통",
  "법률",
];

const RegisterCompany = () => {
  const navigate = useNavigate();
  const userId = useLocation().state.userId;
  const companyName = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const [isCodeSame, setIsCodeSame] = useState<null | boolean>(null);
  const [codeChecked, setCodeChecked] = useState<null | boolean>(null);
  const { jobInfo } = useJobStore();
  const { showToast } = useToast();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const formData = new FormData();
  const imgRef = useRef<HTMLInputElement>(null) as RefObject<HTMLInputElement>;
  const [uploadedURL, setUploadedURL] = useState("");

  const handleClickEmailVerify = async (email: string) => {
    console.log(email);
    if (!email) {
      showToast({
        message: "이메일을 입력해주세요.",
        type: "warning",
        isDarkMode,
      });
      return;
    }
    showToast({
      message: "메일로 인증코드가 전송되었습니다.",
      type: "info",
      isDarkMode,
    });
    // return await axiosAPI.post(`/v1/certification/users/me/company-mail`, {
    //   userId: userId,
    //   companyEmail: emailRef.current && emailRef.current.value,
    // })
    return await sendEmailValidCode(email, userId);
  };
  const emailVerifyMutation = useMutation({
    mutationFn: (email: string) => handleClickEmailVerify(email),
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  //이메일 인증 버튼 누르면 실행되는 함수
  const handleEmailCertification = async () => {
    emailRef.current && emailVerifyMutation.mutate(emailRef.current.value);
  };

  //인증 코드 입력하고 확인 버튼 누르면 실행되는 함수
  const checkEmailCode = async () => {
    setCodeChecked(true);
    // const response = await axiosAPI.post('/v1/certification/users/me/company-mail/verification', {
    //   userId: userId,
    //   verificationCode: codeRef.current && codeRef.current.value,
    // })
    if (!codeRef.current?.value) {
      showToast({
        message: "인증코드를 입력해주세요.",
        type: "warning",
        isDarkMode,
      });
      return;
    }
    const response = await getEmailValid(userId, codeRef.current && codeRef.current.value);
    if (response.status == 200) {
      setIsCodeSame(true);
    } else {
      setIsCodeSame(false);
    }
  };

  const submitUserCompanyData = () => {
    //다 체크 됐나 확인하고
    if (!codeChecked) {
      showToast({
        message: "인증코드가 확인되지 않았습니다. ",
        type: "warning",
        isDarkMode,
      });
      return;
    } else if (!isCodeSame) {
      showToast({
        message: "인증코드가 일치하지 않습니다. ",
        type: "warning",
        isDarkMode,
      });
      return;
    } else if (companyName.current && companyName.current.value.length === 0) {
      showToast({
        message: "회사명을 입력해주세요.",
        type: "warning",
        isDarkMode,
      });
      return;
    } else if (imgRef.current && !imgRef.current?.files) {
      showToast({
        message: "명함을 업로드 해주세요!",
        type: "warning",
        isDarkMode,
      });
      return;
    }
    formData.append("userId", userId);
    companyName.current && formData.append("companyName", companyName.current.value);
    emailRef.current && formData.append("companyEmail", emailRef.current.value);
    formData.append("department", jobInfo);
    if (imgRef.current && imgRef.current?.files) {
      formData.append("businessCard", imgRef.current?.files[0]);
    }

    registerCompanyData();
  };

  const registerCompanyData = () => {
    console.log(formData);

    // await axiosAPI
    //   .post('/v1/certification/users/me/company-info', body, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    registerCompanyInfo(formData, false)
      .then(() => {
        showToast({
          message: "회사 정보 등록 완료! 다시 로그인 해주세요!",
          type: "success",
          isDarkMode: false,
        });
        navigate("/login");
      })
      .catch(() => {
        showToast({
          message: "회사 정보 등록에 실패했습니다.",
          type: "error",
          isDarkMode: false,
        });
      });
  };
  // const registerCompanyMutation = useMutation((body: object) => registerCompanyData(body), {
  //   onSuccess: (response) => {
  //     console.log(response)
  //     navigate('/')
  //   },
  //   onError: () => {
  //     showToast({
  //       message: '회사 정보 등록에 실패했습니다.',
  //       type: 'error',
  //       isDarkMode: false,
  //     })
  //   },
  // })
  const handleImageChange = () => {
    if (imgRef.current && imgRef.current?.files) {
      if (!imgRef.current.files[0]) {
        return;
      }
      console.log(imgRef.current?.files[0]);
      formData.append("businessCard", imgRef.current?.files[0]);
      console.log(formData);
      const url = URL.createObjectURL(imgRef.current?.files[0]);
      setUploadedURL(url);
    }
  };
  const handleClickUpload = () => {
    if (!imgRef.current) {
      return;
    }
    imgRef.current.click();
  };

  return (
    <StyleRegisterWrapper>
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
              prevClick={() => {
                navigate("/register/user");
              }}
            />
          </StyleIcon>
          <StyleHeaderText>{"회사 인증"}</StyleHeaderText>
          <StyleIcon>
            <MdWbSunny
              size={20}
              color={palette.TERTIARY}
            />
          </StyleIcon>
        </FlexBox>
        {/* <Spacing size={11} /> */}
        <StyleDivider />
      </StyleRegisterHeader>
      <Spacing size={13} />
      <StyleDataWrapper>
        <FlexBox
          gap={16}
          direction={"column"}
        >
          <FlexBox gap={16}>
            <RegisterInput
              width={350}
              placeholder={"회사 명"}
              ref={companyName}
            />
          </FlexBox>
          <FlexBox gap={16}>
            <RegisterInput
              width={260}
              placeholder={"회사 이메일"}
              ref={emailRef}
            />
            <NormalButton
              normalButtonType={"email-certify"}
              onClick={() => handleEmailCertification()}
            >
              {"이메일 인증"}
            </NormalButton>
          </FlexBox>
        </FlexBox>
        <Spacing size={16} />
        <FlexBox
          gap={16}
          style={{
            position: "relative",
          }}
        >
          <RegisterInput
            width={348}
            placeholder={"인증코드 6자리 입력"}
            ref={codeRef}
          />
          <StyleVerificationEmailButton onClick={() => checkEmailCode()}>
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
        <StyleInterestText>{"직무정보"}</StyleInterestText>
        <FlexBox direction={"column"}>
          <SelectorButtonContainer
            isDarkMode={false}
            type={"job"}
            buttonNames={JobList}
            maxLength={1}
          ></SelectorButtonContainer>
        </FlexBox>
        <Spacing size={10} />

        <FlexBox
          gap={0}
          direction={"column"}
        >
          <StyleText> {"명함을 업로드 해주세요!"}</StyleText>
          <StyleImageCard onClick={handleClickUpload}>
            {uploadedURL ? (
              <img
                src={uploadedURL}
                alt={"사용자가 업로드 한 이미지"}
                style={{ width: "auto", height: "100%" }}
              />
            ) : (
              <MdOutlinePhotoCamera size={50} />
            )}
            <input
              type={"file"}
              accept={"image/jpg, image/jpeg, image/png"}
              multiple
              ref={imgRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </StyleImageCard>
        </FlexBox>
      </StyleDataWrapper>
      <Spacing size={20} />
      <StyleSubmitButtonWrapper>
        <NormalButton
          normalButtonType={"form-submit"}
          onClick={submitUserCompanyData}
        >
          {"등록 완료"}
        </NormalButton>
      </StyleSubmitButtonWrapper>
      <Spacing size={20} />
    </StyleRegisterWrapper>
  );
};
const StyleRegisterWrapper = styled.div`
  background-color: ${palette.GRAY100};
  height: 100%;
  overflow: scroll;
`;
const StyleDataWrapper = styled.div``;
const StyleImageCard = styled.button`
  width: 250px;
  height: 150px;
  background: ${palette.WHITE};
  border: 1px dashed ${palette.GRAY600};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* @media (max-width: 786px) {
    width: 90vw;
    height: 50vh;
  } */
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
  position: relative;
`;
const StyleText = styled.div`
  font-size: ${typo.Body_12()};
  margin: 10px;
`;
const StyleIcon = styled.button`
  cursor: pointer;
`;

export const StyleVerificationEmailButton = styled.button`
  width: 42px;
  height: 25px;
  background-color: ${palette.TERTIARY};
  position: absolute;
  right: 30px;
  color: ${palette.WHITE};
  border-radius: 10px;
  font-size: 12px;
  font-family: "Pretendard-Regular";
  letter-spacing: -1px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;
export default RegisterCompany;

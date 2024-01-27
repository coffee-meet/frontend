import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import postMyInquiry from "@/apis/profile/postMyInquiry.ts";
import Avatar from "@/components/common/Avatar";
import BackChevron from "@/components/common/BackChevron";
import NormalButton from "@/components/common/Buttons/NormalButton";
import { FlexBox } from "@/components/common/Flexbox";
import GradationBackground from "@/components/common/GradationBackground";
import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";
import Spacing from "@/components/common/Spacing";
import useToast from "@/hooks/useToast.tsx";
import useThemeStore from "@/store/ThemeStore.tsx";
import inquiryImage from "@/assets/images/inquiryImage.svg";

const ProfileHelpDesk = () => {
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handlePostInquiry = () => {
    if (!inputRef.current?.value) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!textareaRef.current?.value) {
      alert("내용을 입력해주세요");
      return;
    }
    postMyInquiry(inputRef.current.value, textareaRef.current.value)
      .then(() => {
        showToast({ message: "불편사항이 접수되었습니다.", type: "success" });
        navigate("/profile");
      })
      .catch(() => {
        showToast({ message: "불편사항 접수에 실패했습니다.", type: "error" });
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
            title={"불편사항 접수"}
            leftIcon={
              <BackChevron
                hasBackground={true}
                isDarkMode={isDarkMode}
              />
            }
            isDarkMode={isDarkMode}
            hasBackground={true}
          />
          <Spacing size={48} />
          <Avatar
            width={110}
            height={110}
            imgUrl={inquiryImage}
          />
          <Spacing size={20} />
          <InquiryTitleInput
            placeholder={"제목을 입력해주세요"}
            ref={inputRef}
          />
          <Spacing size={20} />
          <InquiryContentInput
            placeholder={"불편사항을 입력해주세요"}
            ref={textareaRef}
          />
          <Spacing size={40} />
          <NormalButton
            normalButtonType={"form-submit"}
            onClick={handlePostInquiry}
          >
            {"불편사항 제출하기"}
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

const InquiryTitleInput = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 0 10px;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  &::placeholder {
    color: #bdbdbd;
  }
`;

const InquiryContentInput = styled.textarea`
  width: 260px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  &::placeholder {
    color: #bdbdbd;
  }
`;

export default ProfileHelpDesk;

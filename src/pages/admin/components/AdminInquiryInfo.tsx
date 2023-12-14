import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import AdminInquiryAPI from "@/apis/adminInquiry/AdminInquiryApi";
import AdminPageHeader from "@/pages/admin/components/AdminPageHeader";
import Spacing from "@/components/common/Spacing";
// import Spacing from '@/components/common/Spacing'
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import InquiryImage from "@/assets/images/inquiryImage.svg";

interface AdminInquiryInfoProps {
  selectedInquiryNickname: string;
}

const AdminInquiryInfo = (selectedInquiryNickname: AdminInquiryInfoProps) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["ApprovalRequestUserInfo"],
    queryFn: AdminInquiryAPI.GET_INQUIRY_INFO,
  });
  console.log(isSuccess && data);
  const inquiryNickname = selectedInquiryNickname.selectedInquiryNickname;

  const mockData = {
    inquirerId: 4618,
    inquirerNickname: "유명한",
    inquirerEmail: "myeonghan@naver.com",
    title: "회사인증 문의",
    content: "회사 인증 부탁드립니다!",
    createdAt: "2022-03-06 18:32:47.419",
  };

  return (
    <>
      <StyledAdminInquiryInfo>
        <AdminPageHeader username={"문의 사항 처리"}></AdminPageHeader>

        <Spacing size={53}></Spacing>
        <StyledTextNameWrapper>
          <Text
            font={"Body_18"}
            fontWeight={900}
            letterSpacing={-1}
          >
            {`${mockData.title} `}
          </Text>
          <StyledSecondTextWrapper>
            <Text
              textColor={palette.GRAY500}
              font={"Body_16"}
              fontWeight={100}
              letterSpacing={-1}
            >
              {`${inquiryNickname} `}
            </Text>
          </StyledSecondTextWrapper>
        </StyledTextNameWrapper>

        <StyledInquiryContentWrapper>
          <StyledInquiryContent>
            <Text
              font={"Body_16"}
              fontWeight={400}
              letterSpacing={-1}
            >
              {mockData.content}
            </Text>
            <StyledInquiryImage src={InquiryImage}></StyledInquiryImage>
          </StyledInquiryContent>
        </StyledInquiryContentWrapper>
        <StyledTextDateWrapper>
          <Text
            textColor={palette.GRAY300}
            font={"Body_16"}
            fontWeight={400}
            letterSpacing={-1}
          >
            {"2023.11.22"}
          </Text>
        </StyledTextDateWrapper>

        <Spacing size={100}></Spacing>
      </StyledAdminInquiryInfo>
    </>
  );
};

const StyledAdminInquiryInfo = styled.div`
  background-color: ${palette.WHITE};
  height: 662px;
`;
const StyledInquiryContent = styled.div`
  position: relative;
  padding: 30px 20px 30px 20px;
  background-color: ${palette.GRAY100};
  width: 345px;
  height: 384px;
  border-radius: 20px;
`;
const StyledInquiryContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledInquiryImage = styled.img`
  position: absolute;
  top: 320px;
  right: 14px;
`;
const StyledTextNameWrapper = styled.div`
  padding-left: 35px;
  padding-bottom: 12px;
`;
const StyledTextDateWrapper = styled.div`
  padding-left: 310px;
  padding-top: 8px;
  color: ${palette.GRAY400};
`;
const StyledSecondTextWrapper = styled.div`
  margin-left: 295px;
  margin-top: 8px;
  margin-bottom: 6px;
`;

export default AdminInquiryInfo;

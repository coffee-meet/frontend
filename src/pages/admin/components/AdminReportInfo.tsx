import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import AdminReportAPI from "@/apis/adminReport/AdminReportApi";
import AdminReportInfoListRow from "@/components/common/ListRow/AdminReportInfoListRow";
import Spacing from "@/components/common/Spacing";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";
import AdminPageHeader from "./AdminPageHeader";

interface AdminReportInfoProps {
  selectedReporterNickname: string;
}

const AdminReportInfo = ({ selectedReporterNickname }: AdminReportInfoProps) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["ReportedUserInfo"],
    queryFn: AdminReportAPI.GET_REPORT_INFO,
  });
  console.log(isSuccess && data);

  const mockData = {
    reporterNickname: "박은지",
    targetedNickname: "유명한",
    targetedEmail: "myeonghan@naver.com",
    reason: "잠수",
    reasonDetail: "채팅방 내 잠수 기네스북 기록을 세웠어요",
    reportedCount: 3,
    createdAt: "2023.11.23 12:00:00",
  };

  return (
    <StyledAdminReportInfoOuterWrapper>
      <AdminPageHeader username={selectedReporterNickname} />
      <StyledReportInfoListOuterWrapper>
        <StyledReportInfoListWrapper>
          <AdminReportInfoListRow
            nickname={"신고자"}
            height={84}
            infoMessage={mockData.reporterNickname}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={"일시"}
            height={84}
            infoMessage={mockData.createdAt}
            isDarkMode={false}
          />
          <AdminReportInfoListRow
            nickname={"신고 사유"}
            height={84}
            infoMessage={mockData.reason}
            isDarkMode={false}
          />

          <AdminReportInfoListRow
            nickname={"해당 사용자 메일"}
            height={84}
            infoMessage={mockData.targetedEmail}
            isDarkMode={false}
          />
        </StyledReportInfoListWrapper>
        <StyledTextWrapper>
          <Text
            font={"Body_16"}
            fontWeight={700}
            letterSpacing={-1}
          >
            {"신고 상세 사유"}
          </Text>
        </StyledTextWrapper>
        <StyledReportSpecificContent>
          <Text
            font={"Body_12"}
            fontWeight={400}
            letterSpacing={0.5}
          >
            {" "}
            {"채팅방 내 잠수 기네스북 기록을 세웠어요"}
          </Text>
        </StyledReportSpecificContent>
        <Spacing size={70}></Spacing>
      </StyledReportInfoListOuterWrapper>
      <StyledBelowWhiteSpace></StyledBelowWhiteSpace>
    </StyledAdminReportInfoOuterWrapper>
  );
};

const StyledAdminReportInfoOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
  overflow: scroll;
  height: 662px;
`;

const StyledReportInfoListWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledReportInfoListOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
`;
const StyledBelowWhiteSpace = styled.div`
  background-color: ${palette.WHITE};
`;
const StyledTextWrapper = styled.div`
  padding-left: 35px;
  padding-bottom: 16px;
  padding-top: 30px;
`;
const StyledReportSpecificContent = styled.div`
  margin: 0 auto;
  background-color: ${palette.GRAY100};
  width: 327px;
  height: 170px;
  border-radius: 20px;
  padding: 20px;
  overflow: scroll;
`;
export default AdminReportInfo;

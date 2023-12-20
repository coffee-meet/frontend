import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import AdminReportAPI from "@/apis/adminReport/AdminReportApi";
import AdminReportListRow from "@/components/common/ListRow/AdminReportListRow";
import AdminReportListRowTitle from "@/components/common/ListRow/AdminReportListRowTitle";
import { palette } from "@/styles/palette";

interface AdminReportListProps {
  onReportSelect: (nickname: string) => void;
}

interface ReportData {
  targetedNickname: string;
  chattingRoomName: string;
  targetedId: number;
  chattingRoomId: number;
  createdAt: string;
}

interface ReportData {
  targetedNickname: string;
  chattingRoomName: string;
  targetedId: number;
  chattingRoomId: number;
  createdAt: string;
}

const AdminReportList = ({ onReportSelect }: AdminReportListProps) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["ReportedUserList"],
    queryFn: AdminReportAPI.GET_REPORT_LIST,
  });
  const reportDatas = data?.data.contents;
  const handlePersonReported = (nickname: string) => {
    onReportSelect(nickname);
  };

  return (
    <StyledAdminReportListContainerOuterWrapper>
      <StyledAdminReportListContainer>
        {isSuccess && (
          <>
            <AdminReportListRowTitle
              chattingRoomName={"채팅방 이름"}
              height={71}
              isDarkMode={false}
              reportedNickname={"신고 대상 닉네임"}
              reportedDate={"신고 날짜"}
            ></AdminReportListRowTitle>
            {reportDatas.length > 0 ? (
              reportDatas.map((reportData: ReportData, index: number) => (
                <AdminReportListRow
                  targetedNickname={reportData.targetedNickname}
                  key={index}
                  height={71}
                  chattingRoomName={reportData.chattingRoomName}
                  reportedDate={reportData.createdAt}
                  isDarkMode={false}
                  onClick={() => handlePersonReported(reportData.targetedNickname)}
                />
              ))
            ) : (
              <StyledNoReportListAlertText>
                {"현재 신고 내역이 없습니다!"}
              </StyledNoReportListAlertText>
            )}
          </>
        )}
        {/* {isSuccess && (
          <>
            <AdminReportListRowTitle
              chattingRoomName={'채팅방 이름'}
              height={71}
              isDarkMode={false}
              reportedNickname={'신고 대상 닉네임'}
              reportedDate={'신고 날짜'}
            ></AdminReportListRowTitle>
            {ReportDatas.map((reportListData: ReportListData, index: number) => (
              <AdminReportListRow
                reportedNickname={reportListData.reportedUserName}
                key={index}
                height={71}
                chattingRoomName={reportListData.chattingRoomName}
                reportedDate={reportListData.reportedDate}
                chattingRoomName={reportListData.chattingRoomName}
                reportedDate={reportListData.reportedDate}
                isDarkMode={false}
                onClick={() => handlePersonReported(reportListData.reportedUserName)}
              />
            ))}
          </>
        )} */}
      </StyledAdminReportListContainer>
    </StyledAdminReportListContainerOuterWrapper>
  );
};
const StyledAdminReportListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 591px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`;
const StyledAdminReportListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
`;
const StyledNoReportListAlertText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding-top: 20px;
  color: ${palette.GRAY500};
`;

export default AdminReportList;

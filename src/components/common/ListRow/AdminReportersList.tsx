import styled from "@emotion/styled";
import { useMutation, useQuery } from "@tanstack/react-query";
import AdminReportAPI from "@/apis/adminReport/AdminReportApi";
import AdminPageHeader from "@/pages/admin/components/AdminPageHeader";
import AdminReportersListRow from "@/components/common/ListRow/AdminReportersListRow";
import Spacing from "@/components/common/Spacing";
import { useModal } from "@/hooks/useModal";
import { palette } from "@/styles/palette";
import NormalButton from "../Buttons/NormalButton";

interface AdminReportersListProps {
  onReportSelect: (nickname: string) => void;
  selectedReportNickname: string;
}

// interface ReportersListData {
//   reporterUserName: string
//   reportedDate: string
// }
const AdminReportersList = ({
  onReportSelect,
  selectedReportNickname,
}: AdminReportersListProps) => {
  const mutationReportAddCount = useMutation({ mutationFn: AdminReportAPI.POST_REPORT_ADD });
  const mutationReportIgnore = useMutation({ mutationFn: AdminReportAPI.POST_REPORT_IGNORE });
  const onReportAddCount = () => {
    mutationReportAddCount.mutate();
  };
  const onReportIgnore = () => {
    mutationReportIgnore.mutate();
  };
  const { openModal } = useModal();
  const handleAccumulationAddBtn = () => {
    openModal({
      type: "confirm",
      mainText: "신고를 누적 하시겠습니까?",
      okFunc: onReportAddCount,
    });
  };
  const handleAccumulationIgnoreBtn = () => {
    openModal({
      type: "confirm",
      mainText: "신고를 무시 하시겠습니까?",
      okFunc: onReportIgnore,
    });
  };
  const { data, isSuccess } = useQuery({
    queryKey: ["ReporterUserList"],
    queryFn: AdminReportAPI.GET_REPORTERS_LIST,
  });
  console.log(isSuccess && data);
  const handlePersonReported = (nickname: string) => {
    onReportSelect(nickname);
  };

  const mockData = [
    { reporterUserName: "박은지", reportedDate: "2023.11.23" },
    { reporterUserName: "유명한", reportedDate: "2021.11.21" },
    { reporterUserName: "박상민", reportedDate: "2021.11.15" },
  ];
  return (
    <StyledAdminReportersListContainerOuterWrapper>
      <AdminPageHeader username={selectedReportNickname}></AdminPageHeader>
      <StyledAdminReportersListContainer>
        {mockData.map((data, index) => (
          <AdminReportersListRow
            reporterNickname={data.reporterUserName}
            key={index}
            height={71}
            reportedDate={data.reportedDate}
            isDarkMode={false}
            onClick={() => handlePersonReported(data.reporterUserName)}
          />
        ))}
        {/* {isSuccess && (
          <>
            {ReportersDatas.map((reporterListData: ReportersListData, index: number) => (
              <AdminReportersListRow
                reporterNickname={reporterListData.reporterUserName}
                key={index}
                height={71}
                reportedDate={reporterListData.reportedDate}
                isDarkMode={false}
                onClick={() => handlePersonReported(reporterListData.reporterUserName)}
              />
            ))}
          </>
        )} */}
        <Spacing size={223}></Spacing>
        <StyledButtonsWrapper>
          <NormalButton
            onClick={handleAccumulationAddBtn}
            normalButtonType={"admin-accept"}
          >
            {"누적 추가"}
          </NormalButton>
          <NormalButton
            onClick={handleAccumulationIgnoreBtn}
            normalButtonType={"admin-deny"}
          >
            {"무시"}
          </NormalButton>
        </StyledButtonsWrapper>
      </StyledAdminReportersListContainer>
    </StyledAdminReportersListContainerOuterWrapper>
  );
};
const StyledAdminReportersListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 662px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`;
const StyledAdminReportersListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
  height: 662px;
`;
const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 60px 0 25px 0;
`;
export default AdminReportersList;

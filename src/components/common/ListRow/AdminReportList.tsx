import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminReportAPI from '@/apis/adminReport/AdminReportApi'
import AdminReportListRow from '@/components/common/ListRow/AdminReportListRow'
import AdminReportListRowTitle from '@/components/common/ListRow/AdminReportListRowTitle'
import { palette } from '@/styles/palette'

interface AdminReportListProps {
  onReportSelect: (nickname: string) => void
}
interface ReportListData {
  reportedUserName: string
  reportedDate: string
}
const AdminReportList = ({ onReportSelect }: AdminReportListProps) => {
  const { data, isSuccess } = useQuery(['ReportedUserList'], AdminReportAPI.GET_REPORT_LIST)
  const handlePersonReported = (nickname: string) => {
    onReportSelect(nickname)
  }
  const ReportDatas = data?.data.reports

  return (
    <StyledAdminReportListContainerOuterWrapper>
      <StyledAdminReportListContainer>
        {isSuccess && (
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
                chattingRoomName={`채팅방${index.toString()}`}
                reportedDate={reportListData.reportedDate}
                isDarkMode={false}
                onClick={() => handlePersonReported(reportListData.reportedUserName)}
              />
            ))}
          </>
        )}
      </StyledAdminReportListContainer>
    </StyledAdminReportListContainerOuterWrapper>
  )
}
const StyledAdminReportListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 662px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`
const StyledAdminReportListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
`
export default AdminReportList

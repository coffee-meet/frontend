import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminReportAPI from '@/apis/adminReport/AdminReportApi'
import AdminReportListRow from '@/components/common/ListRow/AdminReportListRow'
import { palette } from '@/styles/palette'

interface AdminReportListProps {
  onReportSelect: (nickname: string) => void
}
interface ReportListData {
  reportedUserName: string
  reportCount: number
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
        {isSuccess &&
          ReportDatas.map((reportListData: ReportListData, index: number) => (
            <AdminReportListRow
              key={index}
              height={71}
              nickname={reportListData.reportedUserName}
              infoMessage={reportListData.reportCount}
              isDarkMode={false}
              onClick={() => handlePersonReported(reportListData.reportedUserName)}
            />
          ))}
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

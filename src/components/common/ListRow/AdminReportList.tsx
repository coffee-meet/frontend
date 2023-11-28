import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminReportAPI from '@/apis/adminReport/AdminReportApi'
import AdminReportListRow from '@/components/common/ListRow/AdminReportListRow'
import AdminReportListRowTitle from '@/components/common/ListRow/AdminReportListRowTitle'
import { palette } from '@/styles/palette'

interface AdminReportListProps {
  onReportSelect: (nickname: string) => void
}
// interface ReportListData {
//   chattingRoomName: string
//   reportedUserName: string
//   reportedDate: string
// }
const AdminReportList = ({ onReportSelect }: AdminReportListProps) => {
  const { data, isSuccess } = useQuery(['ReportedUserList'], AdminReportAPI.GET_REPORT_LIST)
  console.log(isSuccess && data)
  const handlePersonReported = (nickname: string) => {
    onReportSelect(nickname)
  }
  // const ReportDatas = data?.data.reports

  const mockData = [
    { chattingRoomName: '채팅방1', reportedUserName: '유명한', reportedDate: '2023.11.23' },
    { chattingRoomName: '채팅방2', reportedUserName: '박상민', reportedDate: '2023.11.22' },
    { chattingRoomName: '채팅방3', reportedUserName: '박은지', reportedDate: '2023.11.22' },
    { chattingRoomName: '채팅방4', reportedUserName: '주다현', reportedDate: '2023.11.15' },
    { chattingRoomName: '채팅5', reportedUserName: '남궁호수', reportedDate: '2023.10.29' },
    { chattingRoomName: '채팅방6', reportedUserName: '우창욱', reportedDate: '2023.10.26' },
    { chattingRoomName: '채팅방칠', reportedUserName: '유명한', reportedDate: '2023.10.26' },
    { chattingRoomName: '채팅방팔', reportedUserName: '박상민', reportedDate: '2023.10.26' },
    { chattingRoomName: '채팅방9', reportedUserName: '박은지', reportedDate: '2023.10.23' },
  ]

  return (
    <StyledAdminReportListContainerOuterWrapper>
      <StyledAdminReportListContainer>
        {
          <>
            <AdminReportListRowTitle
              chattingRoomName={'채팅방 이름'}
              height={71}
              isDarkMode={false}
              reportedNickname={'신고 대상 닉네임'}
              reportedDate={'신고 날짜'}
            ></AdminReportListRowTitle>
            {mockData.map((data, index) => (
              <AdminReportListRow
                reportedNickname={data.reportedUserName}
                key={index}
                height={71}
                chattingRoomName={data.chattingRoomName}
                reportedDate={data.reportedDate}
                isDarkMode={false}
                onClick={() => handlePersonReported(data.reportedUserName)}
              />
            ))}
          </>
        }
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

import styled from '@emotion/styled'

import AdminReportListRow from '@/components/common/ListRow/AdminReportListRow'
import { palette } from '@/styles/palette'

const AdminReportList = () => {
  return (
    <AdminReportListContainer>
      <AdminReportListRow
        nickname={'유명한'}
        height={60}
        infoMessage={'누적 1회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'박상민'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'박은지'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'주다현'}
        height={60}
        infoMessage={'누적 1회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'남궁호수'}
        height={60}
        infoMessage={'누적 1회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'우창욱'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 3회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 1회'}
        isDarkMode={false}
      />
      <AdminReportListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'누적 2회'}
        isDarkMode={false}
      />
    </AdminReportListContainer>
  )
}
const AdminReportListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 500px;
`
export default AdminReportList

import styled from '@emotion/styled'

import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'

const AdminApprovalList = () => {
  return (
    <AdminApprovalListContainer>
      <AdminApprovalListRow
        nickname={'박상민'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'유명한'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'박은지'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'주다현'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'우창욱'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'남궁호수'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
      <AdminApprovalListRow
        nickname={'홍길동'}
        height={60}
        infoMessage={'대기 중'}
        isDarkMode={false}
      />
    </AdminApprovalListContainer>
  )
}
const AdminApprovalListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 500px;
`
export default AdminApprovalList

import styled from '@emotion/styled'

import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'

const AdminApprovalList = () => {
  return (
    <AdminApprovalListOuterWrapper>
      <AdminApprovalListContainer>
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
    </AdminApprovalListOuterWrapper>
  )
}
const AdminApprovalListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 500px;
`
const AdminApprovalListOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`
export default AdminApprovalList

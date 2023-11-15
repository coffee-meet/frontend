import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminApprovalAPI from '@/apis/adminApproval/AdminApprovalApi'
import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'

interface AdminApprovalListProps {
  onApproveSelectUserName: (nickname: string) => void
}
interface ApprovalListData {
  approvalRequestUser: string
  approvalRequestUserStatus: string
}

const AdminApprovalList = ({ onApproveSelectUserName }: AdminApprovalListProps) => {
  // API 요청 코드
  const { data, isSuccess } = useQuery(
    ['ApprovalRequestList'],
    AdminApprovalAPI.GET_APPROVAL_REQUEST_LIST,
  )

  const handlePersonApproval = (nickname: string) => {
    onApproveSelectUserName(nickname)
  }
  const approvalDatas = data?.data.approvals

  return (
    <AdminApprovalListContainerOuterWrapper>
      <AdminApprovalListContainer>
        {isSuccess &&
          approvalDatas.map((approvalListData: ApprovalListData, index: number) => (
            <AdminApprovalListRow
              key={index}
              height={71}
              nickname={approvalListData.approvalRequestUser}
              infoMessage={approvalListData.approvalRequestUserStatus}
              isDarkMode={false}
              onClick={() => handlePersonApproval(approvalListData.approvalRequestUser)}
            />
          ))}
      </AdminApprovalListContainer>
    </AdminApprovalListContainerOuterWrapper>
  )
}
const AdminApprovalListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
`
const AdminApprovalListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 662px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`

export default AdminApprovalList

import styled from '@emotion/styled'

import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'


interface AdminApprovalListProps {
  onApproveSelect: (nickname: string) => void
}

const AdminApprovalList = ({ onApproveSelect }: AdminApprovalListProps) => {
  const handlePersonApproval = (nickname: string) => {
    onApproveSelect(nickname)
  }
  const AdminApprovalListData = [
    { nickname: '유명한', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '박상민', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '박은지', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '주다현', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '남궁호수', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '우창욱', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '대기 중', isDarkMode: false },
  ]

  return (
    <AdminApprovalListContainerOuterWrapper>
      <AdminApprovalListContainer>
        {AdminApprovalListData.map((data, index) => (
          <AdminApprovalListRow
            key={index}
            {...data}
            onClick={() => handlePersonApproval(data.nickname)}
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

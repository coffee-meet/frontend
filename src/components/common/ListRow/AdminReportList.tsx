import styled from '@emotion/styled'

import AdminReportListRow from '@/components/common/ListRow/AdminReportListRow'
import { palette } from '@/styles/palette'

interface AdminReportListProps {
  onReportSelect: (nickname: string) => void
}
const AdminReportList = ({ onReportSelect }: AdminReportListProps) => {
  const handlePersonReported = (nickname: string) => {
    onReportSelect(nickname)
  }
  const AdminReportListData = [
    { nickname: '유명한', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '박상민', height: 71, infoMessage: '누적 2회', isDarkMode: false },
    { nickname: '박은지', height: 71, infoMessage: '누적 2회', isDarkMode: false },
    { nickname: '주다현', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '남궁호수', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '우창욱', height: 71, infoMessage: '누적 2회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
    { nickname: '홍길동', height: 71, infoMessage: '누적 1회', isDarkMode: false },
  ]

  return (
    <StyledAdminReportListContainerOuterWrapper>
      <StyledAdminReportListContainer>
        {AdminReportListData.map((data, index) => (
          <AdminReportListRow
            key={index}
            {...data}
            onClick={() => handlePersonReported(data.nickname)}
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

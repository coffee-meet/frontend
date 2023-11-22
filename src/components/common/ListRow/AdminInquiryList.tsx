import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminInquiryAPI from '@/apis/adminInquiry/AdminInquiryApi'
import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'

interface AdminInquiryListProps {
  onInquirySelectUserName: (nickname: string) => void
}
interface InquiryListData {
  inquiryRequestUser: string
  inquiryRequestDate: string
  onInquirySelectUserName: (nickname: string) => void
}
interface InquiryListData {
  approvalRequestUser: string
  approvalRequestUserStatus: string
}

const AdminInquiryList = ({ onInquirySelectUserName }: AdminInquiryListProps) => {
  // API 요청 코드
  const { data, isSuccess } = useQuery(['AdminInquiryList'], AdminInquiryAPI.GET_INQUIRY_LIST)

  const handlePersonInquiry = (inquiryNickname: string) => {
    onInquirySelectUserName(inquiryNickname)
  }
  const inquiryDatas = data?.data.inquiries

  return (
    <AdminInquiryListContainerOuterWrapper>
      <AdminInquiryListContainer>
        {isSuccess &&
          inquiryDatas.map((inquiryListData: InquiryListData, index: number) => (
            <AdminApprovalListRow
              key={index}
              height={71}
              nickname={inquiryListData.inquiryRequestUser}
              infoMessage={inquiryListData.inquiryRequestDate}
              isDarkMode={false}
              onClick={() => handlePersonInquiry(inquiryListData.inquiryRequestUser)}
            />
          ))}
      </AdminInquiryListContainer>
    </AdminInquiryListContainerOuterWrapper>
  )
}
const AdminInquiryListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
`
const AdminInquiryListContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
  height: 662px;
  width: 80%;
  margin: auto;
  cursor: pointer;
`

export default AdminInquiryList

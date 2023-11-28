import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminInquiryAPI from '@/apis/adminInquiry/AdminInquiryApi'
import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import { palette } from '@/styles/palette'

interface AdminInquiryListProps {
  onInquirySelectUserName: (nickname: string) => void
}
// interface InquiryListData {
//   inquiryRequestUser: string
//   inquiryRequestDate: string
//   onInquirySelectUserName: (nickname: string) => void
// }
// interface InquiryListData {
//   approvalRequestUser: string
//   approvalRequestUserStatus: string
// }

const AdminInquiryList = ({ onInquirySelectUserName }: AdminInquiryListProps) => {
  // API 요청 코드
  const { data, isSuccess, isError } = useQuery(
    ['AdminInquiryList'],
    AdminInquiryAPI.GET_INQUIRY_LIST,
  )

  const handlePersonInquiry = (inquiryNickname: string) => {
    onInquirySelectUserName(inquiryNickname)
  }
  console.log(isSuccess && data)
  console.log(isError)
  // const inquiryDatas = data?.data.inquiries

  const mockData = [
    { inquiryRequestUser: '박상민', inquiryRequestDate: '2023.11.22' },
    { inquiryRequestUser: '박은지', inquiryRequestDate: '2023.11.22' },
    { inquiryRequestUser: '주다현', inquiryRequestDate: '2023.11.22' },
    { inquiryRequestUser: '남궁호수', inquiryRequestDate: '2023.11.21' },
    { inquiryRequestUser: '유명한', inquiryRequestDate: '2023.11.21' },
    { inquiryRequestUser: '박상민', inquiryRequestDate: '2023.11.17' },
    { inquiryRequestUser: '남궁호수', inquiryRequestDate: '2023.11.17' },
    { inquiryRequestUser: '주다현', inquiryRequestDate: '2023.11.17' },
    { inquiryRequestUser: '박은지', inquiryRequestDate: '2023.11.17' },
    { inquiryRequestUser: '우창욱', inquiryRequestDate: '2023.11.10' },
    { inquiryRequestUser: '유명한', inquiryRequestDate: '2023.11.10' },
  ]

  return (
    <AdminInquiryListContainerOuterWrapper>
      <AdminInquiryListContainer>
        {mockData.map((data, index) => (
          <AdminApprovalListRow
            key={index}
            height={71}
            nickname={data.inquiryRequestUser}
            infoMessage={data.inquiryRequestDate}
            isDarkMode={false}
            onClick={() => handlePersonInquiry(data.inquiryRequestUser)}
          />
        ))}
        {/* {isSuccess &&
          inquiryDatas.map((inquiryListData: InquiryListData, index: number) => (
            <AdminApprovalListRow
              key={index}
              height={71}
              nickname={inquiryListData.inquiryRequestUser}
              infoMessage={inquiryListData.inquiryRequestDate}
              isDarkMode={false}
              onClick={() => handlePersonInquiry(inquiryListData.inquiryRequestUser)}
            />
          ))} */}
      </AdminInquiryListContainer>
    </AdminInquiryListContainerOuterWrapper>
  )
}
const AdminInquiryListContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
  width: 100%;
  height: 662px;
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

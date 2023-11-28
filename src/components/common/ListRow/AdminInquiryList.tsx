import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminInquiryAPI from '@/apis/adminInquiry/AdminInquiryApi'
import AdminApprovalListRow from '@/components/common/ListRow/AdminApprovalListRow'
import AdminInquiryListRowTitle from '@/components/common/ListRow/AdminInquiryListRowTitle'
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
    // 실제 예시 response 데이터
    // createdAt: '2023-11-22 12:54:06.291'
    {
      inquiryId: 5732,
      inquirer: '박상민',
      title: '제목1',
      createdAt: '2023.11.22',
    },
    {
      inquiryId: 6155,
      inquirer: '박은지',
      title: '제목2',
      createdAt: '2023.11.22',
    },
    { inquirer: '주다현', createdAt: '2023.11.22' },
    { inquirer: '남궁호수', createdAt: '2023.11.21' },
    { inquirer: '유명한', createdAt: '2023.11.21' },
    { inquirer: '박상민', createdAt: '2023.11.17' },
    { inquirer: '남궁호수', createdAt: '2023.11.17' },
    { inquirer: '주다현', createdAt: '2023.11.17' },
    { inquirer: '박은지', createdAt: '2023.11.17' },
    { inquirer: '우창욱', createdAt: '2023.11.10' },
    { inquirer: '유명한', createdAt: '2023.11.10' },
  ]

  return (
    <AdminInquiryListContainerOuterWrapper>
      <AdminInquiryListContainer>
        {
          <>
            <AdminInquiryListRowTitle
              frontName={'문의자'}
              height={71}
              isDarkMode={false}
              backName={'문의 일시'}
            ></AdminInquiryListRowTitle>
            {mockData.map((data, index) => (
              <AdminApprovalListRow
                key={index}
                height={71}
                nickname={data.inquirer}
                infoMessage={data.createdAt}
                isDarkMode={false}
                onClick={() => handlePersonInquiry(data.inquirer)}
              />
            ))}
          </>
        }
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

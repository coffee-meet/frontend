import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminApprovalAPI from '@/apis/adminApproval/AdminApprovalApi'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

// interface AdminApprovalInfoProps {
//   selectedApprovalNickname: string
// }

const AdminInquiryInfo = () => {
  const { data, isSuccess } = useQuery(
    ['ApprovalRequestUserInfo'],
    AdminApprovalAPI.GET_APPROVAL_INFO,
  )
  console.log(isSuccess && data)

  return (
    <>
      <StyledAdminInquiryInfo>
        <Text font={'Body_24'} fontWeight={900} letterSpacing={-1}>
          {'유명한'}
        </Text>
        <StyledInquiryContentWrapper>
          <StyledInquiryContent>
            <Text font={'Body_16'} fontWeight={400} letterSpacing={-1}>
              {'회사 인증 왜 안해주세요?'}
            </Text>
          </StyledInquiryContent>
        </StyledInquiryContentWrapper>
      </StyledAdminInquiryInfo>
    </>
  )
}

const StyledAdminInquiryInfo = styled.div`
  background-color: ${palette.WHITE};
`
const StyledInquiryContent = styled.div`
  padding: 20px 20px 20px 20px;
  background-color: ${palette.GRAY100};
  width: 345px;
  height: 384px;
  border-radius: 20px;
`
const StyledInquiryContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default AdminInquiryInfo

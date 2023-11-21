import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'

import AdminApprovalAPI from '@/apis/adminApproval/AdminApprovalApi'
import InquiryImage from '@/assets/images/inquiryImage.svg'
import Spacing from '@/components/common/Spacing'
// import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

const AdminInquiryInfo = () => {
  const { data, isSuccess } = useQuery(
    ['ApprovalRequestUserInfo'],
    AdminApprovalAPI.GET_APPROVAL_INFO,
  )
  console.log(isSuccess && data)

  return (
    <>
      <StyledAdminInquiryInfo>
        <Spacing size={53}></Spacing>
        <StyledTextNameWrapper>
          <Text font={'Body_24'} fontWeight={900} letterSpacing={-1}>
            {'유명한'}
          </Text>
        </StyledTextNameWrapper>

        <StyledInquiryContentWrapper>
          <StyledInquiryContent>
            <Text font={'Body_16'} fontWeight={400} letterSpacing={-1}>
              {'회사 인증 왜 안해주세요?'}
            </Text>
            <StyledInquiryImage src={InquiryImage}></StyledInquiryImage>
          </StyledInquiryContent>
        </StyledInquiryContentWrapper>
        <StyledTextDateWrapper>
          <Text font={'Body_16'} fontWeight={400} letterSpacing={-1}>
            {'2023.7.30'}
          </Text>
        </StyledTextDateWrapper>

        <Spacing size={100}></Spacing>
      </StyledAdminInquiryInfo>
    </>
  )
}

const StyledAdminInquiryInfo = styled.div`
  background-color: ${palette.WHITE};
`
const StyledInquiryContent = styled.div`
  position: relative;
  padding: 30px 20px 30px 20px;
  background-color: ${palette.GRAY100};
  width: 345px;
  height: 384px;
  border-radius: 20px;
`
const StyledInquiryContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const StyledInquiryImage = styled.img`
  position: absolute;
  top: 320px;
  right: 14px;
`
const StyledTextNameWrapper = styled.div`
  padding-left: 35px;
  padding-bottom: 12px;
`
const StyledTextDateWrapper = styled.div`
  padding-left: 310px;
  padding-top: 8px;
  color: ${palette.GRAY400};
`

export default AdminInquiryInfo
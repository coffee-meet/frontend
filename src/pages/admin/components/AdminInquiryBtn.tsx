import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

import InquiryImage from '@/assets/images/inquiryImage.svg'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'
const AdminInquiryBtn = () => {
  const navigate = useNavigate()

  const handleInquiryBtnClick = () => {
    navigate('/admin/inquiry')
  }

  return (
    <>
      <StyledInquiryBox onClick={handleInquiryBtnClick}>
        <StyledInquiryImageWrapper>
          <StyledInquiryImage src={InquiryImage}></StyledInquiryImage>
        </StyledInquiryImageWrapper>
        <StyledTextWrapper>
          <Text font={'Body_22'} fontWeight={700} letterSpacing={-1}>
            {'불편 사항 접수'}
          </Text>
        </StyledTextWrapper>
      </StyledInquiryBox>
    </>
  )
}

const StyledInquiryBox = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 71px;
  background-color: ${palette.WHITE};
  backdrop-filter: blur(27.182817459106445px);
  cursor: pointer;
`
const StyledInquiryImage = styled.img``
const StyledInquiryImageWrapper = styled.div`
  padding-left: 28px;
`
const StyledTextWrapper = styled.div`
  padding-left: 78px;
`

export default AdminInquiryBtn

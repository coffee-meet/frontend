import styled from '@emotion/styled'

import businessCardExample from '@/assets/images/businessCardExample.jpg'
import NormalButton from '@/components/common/Buttons/NormalButton'
import { Text } from '@/components/common/Text'
import { useModal } from '@/hooks/useModal'
import { palette } from '@/styles/palette'

import AdminPageHeader from './AdminPageHeader'

interface AdminApprovalInfoProps {
  selectedApprovalNickname: string
}

const AdminApprovalInfo = ({ selectedApprovalNickname }: AdminApprovalInfoProps) => {
  const { openModal } = useModal()
  const handleAcceptCertificationBtn = () => {
    openModal({
      type: 'confirm',
      mainText: '인증을 수락하시겠습니까?',
      okFunc: () => console.log('okFunc'),
    })
  }

  return (
    <StyledAdminLoginOuterWrapper>
      <AdminPageHeader username={selectedApprovalNickname} />
      <StyledAdminApproveFormContainer>
        <StyledEmailContainer>
          <Text font={'Body_16'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
            {'이메일'}
          </Text>
          <StyledEmailTextWrapper>
            <Text
              font={'Body_16'}
              fontWeight={900}
              letterSpacing={-0.5}
              textColor={palette.GRAY700}
            >
              {`myeonghan@naver.com`}
              {/* {`${selectedApprovalNickname}의 이메일, userId를 받을 수 있음 (API 요청)`} */}
            </Text>
          </StyledEmailTextWrapper>
        </StyledEmailContainer>

        <Text
          style={{ marginLeft: '31px' }}
          font={'Body_16'}
          fontWeight={900}
          letterSpacing={-0.5}
          textColor={palette.GRAY300}
        >
          {'명함 이미지'}
        </Text>
        <StyledImage src={businessCardExample} alt={'명함 이미지'} />
        <StyledButtonsWrapper>
          <NormalButton onClick={handleAcceptCertificationBtn} normalButtonType={'admin-accept'}>
            {'인증 수락'}
          </NormalButton>
          <NormalButton normalButtonType={'admin-deny'}>{'거절'}</NormalButton>
        </StyledButtonsWrapper>
      </StyledAdminApproveFormContainer>
    </StyledAdminLoginOuterWrapper>
  )
}

const StyledAdminLoginOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 20px 0;
`
const StyledAdminApproveFormContainer = styled.div`
  background-color: ${palette.WHITE};
`
const StyledEmailTextWrapper = styled.div`
  padding: 16px 34px;
  background-color: ${palette.SKY_BLUE};
  width: 246px;
  border-radius: 20px;
  text-align: center;
`
const StyledEmailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
`
const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0 25px 0;
`
export default AdminApprovalInfo

import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import AdminApprovalAPI from '@/apis/adminApproval/AdminApprovalApi'
import businessCardExample from '@/assets/images/businessCardExample.jpg'
import NormalButton from '@/components/common/Buttons/NormalButton'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import { useModal } from '@/hooks/useModal'
import { palette } from '@/styles/palette'

import AdminPageHeader from './AdminPageHeader'

interface AdminApprovalInfoProps {
  selectedApprovalNickname: string
}

const AdminApprovalInfo = ({ selectedApprovalNickname }: AdminApprovalInfoProps) => {
  const mutationApprovalRequestAccept = useMutation(AdminApprovalAPI.POST_APPROVAL_ACCEPT, {
    onSuccess: (data) => {
      console.log(data)
    },
  })
  const mutationReject = useMutation(AdminApprovalAPI.POST_APPROVAL_REJECT, {
    onSuccess: (data) => {
      console.log(data)
    },
  })

  const onAcceptAdminApproval = () => {
    mutationApprovalRequestAccept.mutate()
  }
  const onRejectAdminApproval = () => {
    mutationReject.mutate()
  }

  const { data, isSuccess } = useQuery(
    ['ApprovalRequestUserInfo'],
    AdminApprovalAPI.GET_APPROVAL_INFO,
  )
  console.log(isSuccess && data)
  const { openModal } = useModal()
  const handleAcceptCertificationBtn = () => {
    openModal({
      type: 'confirm',
      mainText: '인증을 수락 하시겠습니까?',
      okFunc: onAcceptAdminApproval,
    })
  }
  const handleRejectCertificationBtn = () => {
    openModal({
      type: 'confirm',
      mainText: '인증을 거절 하시겠습니까?',
      okFunc: onRejectAdminApproval,
    })
  }

  return (
    <StyledAdminLoginOuterWrapper>
      <AdminPageHeader username={selectedApprovalNickname} />
      <StyledAdminApproveFormContainer>
        <Spacing size={10} />
        <StyledContainer>
          <Text font={'Body_14'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
            {'이메일'}
          </Text>
          <StyledTextWrapper>
            <Text
              font={'Body_16'}
              fontWeight={900}
              letterSpacing={-0.5}
              textColor={palette.GRAY700}
            >
              {`myeonghan@naver.com`}
              {/* {`${selectedApprovalNickname}의 이메일, userId를 받을 수 있음 (API 요청)`} */}
            </Text>
          </StyledTextWrapper>
        </StyledContainer>
        <StyledContainer>
          <Text font={'Body_14'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
            {'회사명'}
          </Text>
          <StyledTextWrapper>
            <Text
              font={'Body_16'}
              fontWeight={900}
              letterSpacing={-0.5}
              textColor={palette.GRAY700}
            >
              {`홍길동 주식회사`}
              {/* {`${selectedApprovalNickname}의 이메일, userId를 받을 수 있음 (API 요청)`} */}
            </Text>
          </StyledTextWrapper>
        </StyledContainer>
        <StyledContainer>
          <Text font={'Body_14'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
            {'부서명'}
          </Text>
          <StyledTextWrapper>
            <Text
              font={'Body_16'}
              fontWeight={900}
              letterSpacing={-0.5}
              textColor={palette.GRAY700}
            >
              {`품질경영팀`}
              {/* {`${selectedApprovalNickname}의 이메일, userId를 받을 수 있음 (API 요청)`} */}
            </Text>
          </StyledTextWrapper>
        </StyledContainer>
        <Spacing size={34} />
        <Text
          style={{ marginLeft: '31px' }}
          font={'Body_14'}
          fontWeight={900}
          letterSpacing={-0.5}
          textColor={palette.GRAY300}
        >
          {'명함 이미지'}
        </Text>
        <StyledImage src={businessCardExample} alt={'명함 이미지'} />
        <Spacing size={26} />

        <StyledButtonsWrapper>
          <NormalButton onClick={handleAcceptCertificationBtn} normalButtonType={'admin-accept'}>
            {'인증 수락'}
          </NormalButton>
          <NormalButton onClick={handleRejectCertificationBtn} normalButtonType={'admin-deny'}>
            {'거절'}
          </NormalButton>
        </StyledButtonsWrapper>
        <Spacing size={18} />
      </StyledAdminApproveFormContainer>
    </StyledAdminLoginOuterWrapper>
  )
}

const StyledAdminLoginOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
  overflow: scroll;
  height: 662px;
`

const StyledAdminApproveFormContainer = styled.div`
  background-color: ${palette.WHITE};
  overflow: scroll;
`
const StyledTextWrapper = styled.div`
  padding: 16px 34px 16px 34px;
  background-color: ${palette.SKY_BLUE};
  width: 246px;
  border-radius: 20px;
  text-align: center;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
`
const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 20px 0 20px 0;
`
const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0 25px 0;
`
export default AdminApprovalInfo

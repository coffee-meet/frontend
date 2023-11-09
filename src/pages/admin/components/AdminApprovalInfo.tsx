import styled from '@emotion/styled'
import { BiLeftArrowAlt } from 'react-icons/bi'

import businessCardExample from '@/assets/images/businessCardExample.jpg'
import NormalButton from '@/components/common/Buttons/NormalButton'
import Input from '@/components/common/Input'
import HomeNavigationBar from '@/components/common/NavigationBar/AdminNavigationBar'
import PageHeader from '@/components/common/PageHeader'
import { Text } from '@/components/common/Text'
import { useModal } from '@/hooks/useModal'
import { palette } from '@/styles/palette'

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
      <PageHeader
        isDarkMode={false}
        hasBackground={true}
        title={selectedApprovalNickname}
        leftIcon={
          <BiLeftArrowAlt
            size={'20px'}
            style={{
              color: palette.GRAY600,
              cursor: 'pointer',
            }}
          />
        }
      />
      <StyledAdminApproveFormContainer>
        <StyledEmailFormWrapper>
          <Text font={'Body_18'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
            {'이메일'}
          </Text>
          <Input
            inputBackgroundColor={palette.SKY_BLUE}
            width={'245px'}
            height={'54px'}
            borderRadius={'20px'}
            inputTextSize={'18px'}
            borderWidth={'0px'}
            inputTextColor={palette.GRAY700}
            inputTextFontWeight={900}
          />
        </StyledEmailFormWrapper>

        <Text
          style={{ marginLeft: '28px' }}
          font={'Body_18'}
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

      <HomeNavigationBar isDarkMode={false} />
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
const StyledEmailFormWrapper = styled.div`
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

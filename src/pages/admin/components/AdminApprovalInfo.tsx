import styled from '@emotion/styled'
import { BiLeftArrowAlt } from 'react-icons/bi'

import businessCardExample from '@/assets/images/businessCardExample.jpg'
import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import NormalButton from '@/components/common/Buttons/NormalButton'
import Input from '@/components/common/Input'
import HomeNavigationBar from '@/components/common/NavigationBar/AdminNavigationBar'
import PageHeader from '@/components/common/PageHeader'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'
const AdminApprovalInfo = () => {
  return (
    <AdminLoginOuterWrapper>
      <AdminAppHeader isDarkMode={false} nickname={'홍길동'} />
      <PageHeader
        isDarkMode={false}
        hasBackground={true}
        title={'홍길동'}
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
        <Text font={'Body_20'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
          {'이메일'}
        </Text>
        <Input
          inputBackgroundColor={palette.SKY_BLUE}
          width={'245px'}
          height={'54px'}
          borderRadius={'20px'}
          inputTextSize={'16px'}
          borderWidth={'0px'}
        />
        <Text font={'Body_20'} fontWeight={900} letterSpacing={-0.5} textColor={palette.GRAY300}>
          {'명함 이미지'}
        </Text>
        <StyledImage src={businessCardExample} alt={'명함 이미지'} />
        <NormalButton normalButtonType={'admin-accept'}>{'인증 수락'}</NormalButton>
        <NormalButton normalButtonType={'admin-deny'}>{'거절'}</NormalButton>
      </StyledAdminApproveFormContainer>

      <HomeNavigationBar isDarkMode={false} />
    </AdminLoginOuterWrapper>
  )
}

const AdminLoginOuterWrapper = styled.div`
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
export default AdminApprovalInfo

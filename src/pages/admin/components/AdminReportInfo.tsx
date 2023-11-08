import styled from '@emotion/styled'
import { BiLeftArrowAlt } from 'react-icons/bi'

import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import NormalButton from '@/components/common/Buttons/NormalButton'
import HomeNavigationBar from '@/components/common/NavigationBar/AdminNavigationBar'
import PageHeader from '@/components/common/PageHeader'
import { palette } from '@/styles/palette'
const AdminReportInfo = () => {
  return (
    <StyledAdminReportInfoOuterWrapper>
      <AdminAppHeader isDarkMode={false} nickname={'홍길동'} />
      <PageHeader
        isDarkMode={false}
        hasBackground={true}
        title={'홍길동(닉네임 명)'}
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
      <StyledAdminReportInfoContainer>
        <StyledButtonsWrapper>
          <NormalButton normalButtonType={'admin-accept'}>{'누적 추가'}</NormalButton>
          <NormalButton normalButtonType={'admin-deny'}>{'무시'}</NormalButton>
        </StyledButtonsWrapper>
      </StyledAdminReportInfoContainer>

      <HomeNavigationBar isDarkMode={false} />
    </StyledAdminReportInfoOuterWrapper>
  )
}

const StyledAdminReportInfoOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`

const StyledAdminReportInfoContainer = styled.div`
  background-color: ${palette.WHITE};
`

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 25px 0 25px 0;
`
export default AdminReportInfo

import styled from '@emotion/styled'
import { BiLeftArrowAlt } from 'react-icons/bi'

import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import NormalButton from '@/components/common/Buttons/NormalButton'
import AdminReportInfoListRow from '@/components/common/ListRow/AdminReportInfoListRow'
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
      <StyledReportInfoListWrapper>
        <AdminReportInfoListRow
          nickname={'신고자'}
          height={60}
          infoMessage={'박은지(닉네임 명)'}
          isDarkMode={false}
        />
        <AdminReportInfoListRow
          nickname={'일시'}
          height={60}
          infoMessage={'2021.09.01 12:00:00'}
          isDarkMode={false}
        />
        <AdminReportInfoListRow
          nickname={'신고 사유'}
          height={60}
          infoMessage={'채팅방 내 잠수'}
          isDarkMode={false}
        />
        <AdminReportInfoListRow
          nickname={'현재 누적 횟수'}
          height={60}
          infoMessage={'누적 2회'}
          isDarkMode={false}
        />
        <AdminReportInfoListRow
          nickname={'해당 사용자 메일'}
          height={60}
          infoMessage={'famous@naver.com'}
          isDarkMode={false}
        />
      </StyledReportInfoListWrapper>

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
  padding: 60px 0 25px 0;
`
const StyledReportInfoListWrapper = styled.div`
  background-color: ${palette.WHITE};
`
export default AdminReportInfo

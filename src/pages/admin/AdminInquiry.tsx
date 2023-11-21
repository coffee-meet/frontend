import styled from '@emotion/styled'

import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import HomeNavigationBar from '@/components/common/NavigationBar/AdminNavigationBar'
import AdminPageHeader from '@/pages/admin/components/AdminPageHeader'
import { palette } from '@/styles/palette'

const AdminInquiry = () => {
  return (
    <>
      <AdminInquiryWrapper>
        <AdminAppHeader isDarkMode={false} nickname={'홍길동'} />
        <AdminPageHeader username={'불편 사항 접수'}></AdminPageHeader>
        {'admin inquiry 페이지 입니다'}
        <HomeNavigationBar isDarkMode={false} />
      </AdminInquiryWrapper>
    </>
  )
}

const AdminInquiryWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`
export default AdminInquiry

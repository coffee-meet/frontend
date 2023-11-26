import styled from '@emotion/styled'

import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import AdminInquiryList from '@/components/common/ListRow/AdminInquiryList'
import HomeNavigationBar from '@/components/common/NavigationBar/AdminNavigationBar'
import AdminPageHeader from '@/pages/admin/components/AdminPageHeader'
import { palette } from '@/styles/palette'

// import AdminInquiryInfo from './components/AdminInquiryInfo'

const AdminInquiry = () => {
  const handleInquiryId = () => {
    // inquiryId: string
    // inquiryId에 대한 처리
  }
  return (
    <>
      <AdminInquiryWrapper>
        <AdminAppHeader isDarkMode={false} nickname={'홍길동'} />
        <AdminPageHeader username={'불편 사항 접수'}></AdminPageHeader>
        {/* <AdminInquiryInfo></AdminInquiryInfo> */}
        <AdminInquiryList onInquirySelectUserName={handleInquiryId}></AdminInquiryList>
        <HomeNavigationBar isDarkMode={false} />
      </AdminInquiryWrapper>
    </>
  )
}

const AdminInquiryWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`
export default AdminInquiry

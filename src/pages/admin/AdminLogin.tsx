import styled from '@emotion/styled'

import AdminAppHeader from '@/components/common/AppHeader/AdminAppHeader'
import { palette } from '@/styles/palette'

import AdminTabs from './components/AdminTabs'
const AdminLogin = () => {
  //msw 테스트 코드
  fetch('/admin/reports/2')
    .then((response) => {
      if (!response.ok) {
        throw new Error('네트워크 상태가 불안정합니다.')
      }
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('fetch 오류 발생.', error))
  return (
    <StyledAdminLoginOuterWrapper>
      <AdminAppHeader isDarkMode={false} nickname={'홍길동'} />
      <AdminTabs />
    </StyledAdminLoginOuterWrapper>
  )
}

const StyledAdminLoginOuterWrapper = styled.div`
  background-color: ${palette.PRIMARY};
`
export default AdminLogin

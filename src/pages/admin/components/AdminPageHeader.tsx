import styled from '@emotion/styled'
import { BiLeftArrowAlt } from 'react-icons/bi'

import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'

interface AdminPageHeaderProps {
  username: string
}

const AdminPageHeader = ({ username }: AdminPageHeaderProps) => {
  return (
    <StyledAdminPageHeaderContainerOuterWrapper>
      <StyledAdminPageHeaderContainer>
        <StyledBackIcon>
          <BiLeftArrowAlt
            size={'30px'}
            style={{
              color: palette.GRAY600,
              cursor: 'pointer',
            }}
          />
        </StyledBackIcon>
        <Text font={'Body_18'} fontWeight={900} letterSpacing={-1}>
          <StyledUsernameWrapper>{username}</StyledUsernameWrapper>
        </Text>

        <StyledBackIconWidthRightSpace />
      </StyledAdminPageHeaderContainer>
    </StyledAdminPageHeaderContainerOuterWrapper>
  )
}
const StyledAdminPageHeaderContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
`
const StyledAdminPageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 70px;
  background-color: ${palette.WHITE};
  border-bottom: 1px solid ${palette.GRAY300};
`

const StyledBackIcon = styled.span`
  margin-left: 20px;
  cursor: pointer;
`

const StyledUsernameWrapper = styled.span`
  margin: 0;
`

const StyledBackIconWidthRightSpace = styled.div`
  width: 40px;
`

export default AdminPageHeader

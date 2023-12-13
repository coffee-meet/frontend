import styled from "@emotion/styled";
import { Text } from "@/components/common/Text";
import { palette } from "@/styles/palette";

interface AdminPageHeaderProps {
  username: string;
}

const AdminPageHeader = ({ username }: AdminPageHeaderProps) => {
  return (
    <StyledAdminPageHeaderContainerOuterWrapper>
      <StyledAdminPageHeaderContainer>
        <StyledUserNameWrapper>
          <Text
            font={"Body_20"}
            fontWeight={900}
            letterSpacing={-1}
          >
            {username}
          </Text>
        </StyledUserNameWrapper>
      </StyledAdminPageHeaderContainer>
    </StyledAdminPageHeaderContainerOuterWrapper>
  );
};
const StyledAdminPageHeaderContainerOuterWrapper = styled.div`
  background-color: ${palette.WHITE};
`;
const StyledAdminPageHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 65px;
  background-color: ${palette.WHITE};
  border-bottom: 1px solid ${palette.GRAY300};
  padding-top: 10px;
`;

const StyledUserNameWrapper = styled.div`
  margin: 0 auto;
`;

export default AdminPageHeader;

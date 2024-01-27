import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import Modal from "@/components/common/Modal";
import { theme } from "@/styles/theme";

const Layout = () => {
  return (
    <MainContainer>
      <Modal />
      <Outlet />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  max-width: 414px;
  height: 100dvh;
  margin: 0 auto;
  background-color: ${theme.palette.GRAY200};
`;

export default Layout;

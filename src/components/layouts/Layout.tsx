import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Toaster } from "sonner";
import Modal from "@/components/common/Modal";
import { theme } from "@/styles/theme";
import useThemeStore from "@/store/ThemeStore.tsx";

const Layout = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <MainContainer>
      <Toaster
        duration={2000}
        position={"top-center"}
        theme={isDarkMode ? "dark" : "light"}
        richColors
      />
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

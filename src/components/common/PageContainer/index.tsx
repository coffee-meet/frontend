import type { ReactNode } from "react";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";

const StyledPageContainer = styled.div<{ height: string; isDarkMode: boolean }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.DARK_BLUE : palette.GRAY100)};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: auto;
  flex: 1;
  overflow-y: scroll;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.2);
`;

type PageContainerProps = {
  children: ReactNode;
  isDarkMode: boolean;
  height?: string;
  style?: React.CSSProperties;
};

/**
 *
 * @param children - 자식 컴포넌트
 * @param isDarkMode - 다크 모드 여부
 * @param height - 높이
 * @param style - (Optional) React.CSSProperties
 */
const PageContainer = ({
  children,
  height = "77%",
  isDarkMode = false,
  ...props
}: PageContainerProps) => {
  return (
    <StyledPageContainer
      height={height}
      isDarkMode={isDarkMode}
      {...props}
    >
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;

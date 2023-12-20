import styled from "@emotion/styled";
import { palette } from "@/styles/palette";

type GradationBackgroundProps = {
  children: React.ReactNode;
  isDarkMode: boolean;
};

/**
 * @param children - 렌더링 할 하위 컴포넌트
 * @param isDarkMode - 다크모드 여부
 */
const GradationBackground = ({ children, isDarkMode }: GradationBackgroundProps) => {
  return <StyledGradationBackground isDarkMode={isDarkMode}>{children}</StyledGradationBackground>;
};

const StyledGradationBackground = styled.div<{
  isDarkMode: boolean;
}>`
  width: 100%;
  height: 100%;
  background: ${({ isDarkMode }) =>
    isDarkMode
      ? `linear-gradient(157deg, ${palette.BLACK} 16.84%, ${palette.DARK_GRADIENT} 40%)`
      : `linear-gradient(139deg, ${palette.PRIMARY} 23.32%, ${palette.GRADIENT} 61.26%)`};
  display: flex;
  flex-direction: column;
`;

export default GradationBackground;

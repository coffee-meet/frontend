import styled from '@emotion/styled'

import { palette } from '@/styles/palette'

const StyledGradationBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(139deg, ${palette.PRIMARY} 23.32%, ${palette.GRADIENT} 61.26%);
  display: flex;
  flex-direction: column;
`

/**
 *
 * @param children - 자식 컴포넌트
 */
const GradationBackground = ({ children }: { children: React.ReactNode }) => {
  return <StyledGradationBackground>{children}</StyledGradationBackground>
}

export default GradationBackground

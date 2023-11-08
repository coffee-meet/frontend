import styled from '@emotion/styled'

import { palette } from '@/styles/palette'

/**
 * @param children - 자식 컴포넌트
 * @param props - (Optional) 커스텀 스타일링
 */

type GradationBackgroundProps = {
  children: React.ReactNode
}

/**
 * @param children - 렌더링 할 하위 컴포넌트
 */
const GradationBackground = ({ children }: GradationBackgroundProps) => {
  return <StyledGradationBackground>{children}</StyledGradationBackground>
}

const StyledGradationBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(139deg, ${palette.PRIMARY} 23.32%, ${palette.GRADIENT} 61.26%);
  display: flex;
  flex-direction: column;
`

export default GradationBackground

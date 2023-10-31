import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { palette } from '@/styles/palette'

const StyledPageContainer = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  padding: 5% 5% 5%;
  background-color: ${palette.GRAY100};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: auto;
  flex: 1;
  overflow-y: scroll;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.2);
`

type PageContainerProps = {
  children: ReactNode
  height?: string
}

/**
 *
 * @param children - 자식 컴포넌트
 * @param height - 높이
 */
const PageContainer = ({ children, height = '77%' }: PageContainerProps) => {
  return <StyledPageContainer height={height}>{children}</StyledPageContainer>
}

export default PageContainer

import styled from '@emotion/styled'
import { SyncLoader } from 'react-spinners'

import { palette } from '@/styles/palette'
const Loading = () => {
  return (
    <LoadingWrapper>
      <SyncLoader size={10} color={`${palette.GRAY500}`} />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 45%;
`
export default Loading

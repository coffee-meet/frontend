// Avatar.tsx
import styled from '@emotion/styled'

type AvatarProps = {
  width: number
  height: number
  imgUrl: string
  margin: string
  shadow?: boolean
}

const StyledAvatar = styled.div<AvatarProps>`
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 50%; // 원 형태로 만들기 위함
  margin: ${(props) => props.margin};
  box-shadow: ${(props) => (props.shadow ? '0px 0px 10px rgba(0, 0, 0, 0.25)' : 'none')};
`

const Avatar: React.FC<AvatarProps> = ({ width, height, imgUrl, margin, shadow = false }) => {
  return (
    <StyledAvatar width={width} height={height} imgUrl={imgUrl} shadow={shadow} margin={margin} />
  )
}

export default Avatar

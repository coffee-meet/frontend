import styled from '@emotion/styled'

import defaultProfileImage from '@/assets/images/defaultProfileImage.png' // 이미지 import

type AvatarProps = {
  width: number | string
  height: number | string
  imgUrl: string
  margin: string
  onClick?: () => void
  border?: string
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
  margin: ${(props) => `${props.margin}px`};
  border: ${(props) => (props.border ? props.border : 'none')};
  box-shadow: ${(props) => (props.shadow ? '0px 0px 10px rgba(0, 0, 0, 0.25)' : 'none')};

  @media (max-width: 280px) {
    width: ${(props) =>
      typeof props.width === 'number' ? `${props.width * 0.95}px` : `calc(${props.width} * 0.95)`};
    height: ${(props) =>
      typeof props.height === 'number'
        ? `${props.height * 0.95}px`
        : `calc(${props.height} * 0.95)`};
  }
`

/**
 * `Avatar` component for displaying profile images.
 * @param width - 아바타의 너비 (픽셀 또는 유효한 CSS 단위).
 * @param height - 아바타의 높이 (픽셀 또는 유효한 CSS 단위).
 * @param imgUrl - 아바타의 이미지 URL. 기본 이미지는 `defaultProfileImage`이다.
 * @param margin - 아바타의 마진 (픽셀 또는 유효한 CSS 단위).
 * @param onClick - (Optional) 클릭 이벤트.
 * @param border - (Optional) 아바타의 테두리. 기본 값은 `none`이다.
 * @param shadow - (Optional) 아바타의 그림자. 기본 값은 `false`이다.
 */
const Avatar = ({
  width,
  height,
  imgUrl,
  margin = '0',
  onClick,
  border,
  shadow = false,
}: AvatarProps) => {
  return (
    <StyledAvatar
      width={width}
      height={height}
      imgUrl={!imgUrl ? defaultProfileImage : imgUrl}
      shadow={shadow}
      margin={margin}
      border={border}
      onClick={onClick}
    />
  )
}

export default Avatar

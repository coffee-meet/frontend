import styled from '@emotion/styled'

type CountNumberProps = {
  currentLength: number
  maxLength: number
  color: string
  right: number
}

type StyleCountNumberProps = {
  color: string
  right: number
}

const CountNumber = ({ right, currentLength, maxLength, color }: CountNumberProps): JSX.Element => {
  return (
    <StyleCountNumber
      right={right}
      color={color}
    >{`${currentLength}/${maxLength}`}</StyleCountNumber>
  )
}

const StyleCountNumber = styled.span<StyleCountNumberProps>`
  position: relative;
  right: ${(props) => props.right}px;
  bottom: 3px;
  font-size: 12px;
  color: ${(props) => props.color};
`

export default CountNumber

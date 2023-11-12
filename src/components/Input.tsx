import styled from '@emotion/styled'

type InputProps = {
  placeholder?: string
  placeholderSize?: string
  placeholderColor?: string
  width?: string
  height?: string
  borderColor?: string
  borderWidth?: string
  inputTextColor?: string
  inputTextSize?: string
  inputBackgroundColor?: string
  borderRadius?: string
}

const Input = ({
  placeholder,
  placeholderSize,
  placeholderColor,
  width,
  height,
  borderColor,
  borderWidth,
  borderRadius,
  inputTextColor,
  inputTextSize,
  inputBackgroundColor,
}: InputProps) => {
  return (
    <>
      <InputWrapper>
        <StyleInput
          placeholder={placeholder}
          placeholderSize={placeholderSize}
          placeholderColor={placeholderColor}
          width={width}
          height={height}
          borderColor={borderColor}
          borderWidth={borderWidth}
          inputTextColor={inputTextColor}
          inputTextSize={inputTextSize}
          inputBackgroundColor={inputBackgroundColor}
          borderRadius={borderRadius}
        ></StyleInput>
      </InputWrapper>
    </>
  )
}

const InputWrapper = styled.div`
  position: relative;
`

const StyleInput = styled.input<InputProps>`
  ::placeholder {
    font-size: ${(props) => props.placeholderSize};
    color: ${(props) => props.placeholderColor};
  }
  position: relative;
  placeholder: ${(props) => props.placeholder};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => props.borderWidth};
  color: ${(props) => props.inputTextColor};
  background-color: ${(props) => props.inputBackgroundColor};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.inputTextSize};
`

export default Input

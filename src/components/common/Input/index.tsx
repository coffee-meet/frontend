import styled from '@emotion/styled'
import React, { ForwardedRef } from 'react'

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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = React.forwardRef(
  (
    {
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
      onChange,
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputWrapper>
        <StyleInput
          ref={ref}
          onChange={onChange}
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
        />
      </InputWrapper>
    )
  },
)
Input.displayName = 'Input'

const InputWrapper = styled.div`
  position: relative;
`

const StyleInput = styled.input<InputProps>`
  ::placeholder {
    font-size: ${(props) => props.placeholderSize};
    color: ${(props) => props.placeholderColor};
  }
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-color: ${(props) => props.borderColor};
  border-width: ${(props) => props.borderWidth};
  color: ${(props) => props.inputTextColor};
  background-color: ${(props) => props.inputBackgroundColor};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.inputTextSize};
  position: relative; // This should be adjusted if needed.
`

export default Input

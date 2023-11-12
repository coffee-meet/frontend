import styled from '@emotion/styled'
import { ComponentProps, forwardRef } from 'react'

import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

interface InputProps extends ComponentProps<'input'> {
  width?: number
  height?: number
  placeholder: string
  type?: string
}

const RegisterInput = forwardRef<HTMLInputElement, InputProps>(function Input(
  { width, height = 46, type = 'text', placeholder, ...props }: InputProps,
  inputRef,
) {
  return (
    <StyleInputWrapper>
      <StyleInput
        widthProps={width}
        heightProps={height}
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        {...props}
      />
    </StyleInputWrapper>
  )
})

const StyleInputWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
`
const StyleInput = styled.input<{ widthProps?: number; heightProps?: number }>`
  background-color: ${palette.WHITE};
  height: ${({ heightProps }) => (heightProps ? `${heightProps}px` : '46px')};
  border: 1px solid ${palette.GRAY200};
  border-radius: 10px;
  width: ${({ widthProps }) => (widthProps ? `${widthProps}px` : '100%')};
  font-size: ${typo.Body_14()};
  /* box-shadow: 3px 3px 1px ${palette.GRAY200}; */
  padding-left: 18px;
  padding-right: 18px;
  color: ${palette.GRAY400};
`

export default RegisterInput

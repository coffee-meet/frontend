import styled from '@emotion/styled'
import { ComponentProps, forwardRef } from 'react'

import { FlexBox } from '@/components/common/Flexbox'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

interface TextAreaProps extends ComponentProps<'textarea'> {
  width?: number
  height?: number
  placeholder?: string
  value?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function Textarea(
  { width, height, placeholder = '메세지를 입력해주세요.', value, ...props }: TextAreaProps,
  textareaRef,
) {
  return (
    <FlexBox fullWidth={true}>
      <StyledTextArea
        widthProps={width}
        heightProps={height}
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </FlexBox>
  )
})

const StyledTextArea = styled.textarea<{ widthProps?: number; heightProps?: number }>`
  width: ${({ widthProps }) => (widthProps ? `${widthProps}px` : '100%')};
  height: ${({ heightProps }) => (heightProps ? `${heightProps}px` : '50px')};
  background-color: ${palette.WHITE};
  border-radius: 10px;
  padding: 8px;
  border: none;
  color: ${palette.GRAY700};
  border-radius: 10px;
  border: none;
  resize: none;
  /* line-height: 270%; */
  font-size: ${typo.Body_14()};
  ${({ theme }) => theme.typo.Body_14()};
  ::placeholder {
    ${({ theme }) => theme.typo.Caption_11()}
    color: ${({ theme }) => theme.palette.GRAY500};
  }
`

export default TextArea

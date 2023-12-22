import type { ComponentProps } from "react";
import { forwardRef } from "react";
import type { Path, UseFormRegister } from "react-hook-form";
import type { CompanyInfoStateType } from "@/schemas/companyInfo.ts";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";

interface InputProps extends ComponentProps<"input"> {
  width?: number;
  height?: number;
  placeholder: string;
  type?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  label?: Path<CompanyInfoStateType>;
  register?: UseFormRegister<CompanyInfoStateType>;
}

/**
 * @param width : input width
 * @param height : input height
 * @param placeholder : input placeholder
 * @param type : input type
 * @param ref : input ref
 * @param label : input react-hook-form label
 * @param register : input react-hook-form register
 * @param props : input other props
 * @description : 정보 등록 및 수정 페이지에서 활용하는 Input 컴포넌트입니다. form 구성 시 ref 또는 register, label를 props로 전달해주세요.
 * @description : ref를 전달하거나, register와 label을 함께 전달해주세요.
 * @returns
 */
const RegisterInput = forwardRef<HTMLInputElement, InputProps>(function Input({
  width,
  height = 46,
  placeholder,
  type = "text",
  ref,
  label,
  register,
  ...props
}: InputProps) {
  return (
    <StyleInputWrapper>
      <StyleInput
        widthProps={width}
        heightProps={height}
        placeholder={placeholder}
        type={type}
        {...(register && label ? register(label) : {})}
        ref={ref}
        {...props}
      />
    </StyleInputWrapper>
  );
});

const StyleInputWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
`;
const StyleInput = styled.input<{ widthProps?: number; heightProps?: number }>`
  background-color: ${palette.WHITE};
  height: ${({ heightProps }) => (heightProps ? `${heightProps}px` : "46px")};
  border: 1px solid ${palette.GRAY200};
  border-radius: 10px;
  width: ${({ widthProps }) => (widthProps ? `${widthProps}px` : "100%")};
  font-size: ${typo.Body_14()};
  /* box-shadow: 3px 3px 1px ${palette.GRAY200}; */
  padding-left: 18px;
  padding-right: 18px;
  color: ${palette.GRAY400};
`;

export default RegisterInput;

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import styled from "@emotion/styled";
import { palette } from "@/styles/palette";
import { typo } from "@/styles/typo";

interface InputProps extends ComponentProps<"input"> {
  width?: number;
  height?: number;
  placeholder: string;
  type?: string;
  isDarkMode: boolean;
}

/**
 * @param width : number 너비
 * @param height : number 높이
 * @param placeholder : string 빈 값일 때 보여줄 텍스트
 * @param type : string input 타입
 * @param props : string 기타 props
 * @param isDarkMode : boolean 다크모드 여부
 * @description : 정보 등록 및 수정 페이지에서 활용하는 Input 컴포넌트입니다. form 구성 시 {...register("label")}를 prop으로 전달해주세요.
 * @returns
 */
const RegisterInput = forwardRef<HTMLInputElement, InputProps>(
  ({ width, height, placeholder, type, isDarkMode, ...props }, ref) => {
    return (
      <StyleInputWrapper>
        <StyleInput
          widthProps={width}
          heightProps={height}
          placeholder={placeholder}
          type={type}
          isDarkMode={isDarkMode}
          {...props}
          ref={ref}
        />
      </StyleInputWrapper>
    );
  },
);

RegisterInput.displayName = "RegisterInput";

const StyleInputWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
`;
const StyleInput = styled.input<{ widthProps?: number; heightProps?: number; isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) => (isDarkMode ? palette.GRAY600 : palette.WHITE)};
  height: ${({ heightProps }) => (heightProps ? `${heightProps}px` : "46px")};
  border: 1px solid ${({ isDarkMode }) => (isDarkMode ? palette.GRAY600 : palette.GRAY200)};
  border-radius: 10px;
  width: ${({ widthProps }) => (widthProps ? `${widthProps}px` : "100%")};
  font-size: ${typo.Body_14()};
  /* box-shadow: 3px 3px 1px ${palette.GRAY200}; */
  padding-left: 18px;
  padding-right: 18px;
  color: ${palette.GRAY400};
`;

export default RegisterInput;

import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";

export interface FlexBoxProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: number;
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * @param direction : direction / 기본 : row
 * @param jusitfy : justify-content / 기본 : center
 * @param align : align-items / 기본 : center
 * @param gap : gap / 기본 : 0
 * @param fullWidth: : 너비 100% 채울지 / 기본 : false
 * @param children : flexbox 내부 요소
 */

export const FlexBox = ({
  direction = "row",
  justify = "center",
  align = "center",
  gap = 0,
  fullWidth = false,
  children,
  ...props
}: FlexBoxProps) => {
  return (
    <StyledFlexBox
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledFlexBox>
  );
};

const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap}px;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

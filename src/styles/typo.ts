import { css } from "@emotion/react";

export const calcRem = (px: number) => `${px / 16}rem`;
export const typo = {
  Body_72: (fontWeight = 600, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(72)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_32: (fontWeight = 600, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(32)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_24: (fontWeight = 500, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(24)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_22: (fontWeight = 500, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(22)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,

  Body_20: (fontWeight = 500, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(20)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_18: (fontWeight = 500, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(18)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_16: (fontWeight = 400, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(16)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_14: (fontWeight = 400, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(14)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_12: (fontWeight = 400, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(12)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_10: (fontWeight = 400, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(10)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Caption_11: (fontWeight = 400, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(11)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Caption_9: (fontWeight = 500, letterSpacing?: number) => css`
    font-family: ${fontWeight >= 600 ? "Pretendard" : "Pretendard-Regular"};
    font-size: ${calcRem(9)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
} as const;

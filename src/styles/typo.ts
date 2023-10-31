import { css } from '@emotion/react'

export const calcRem = (px: number) => `${px / 16}rem`
export const typo = {
  Body_20: (fontWeight: number = 500, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_18: (fontWeight: number = 500, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_16: (fontWeight: number = 400, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_14: (fontWeight: number = 400, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_12: (fontWeight: number = 400, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Body_10: (fontWeight: number = 400, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(10)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Caption_11: (fontWeight: number = 400, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(11)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
  Caption_9: (fontWeight: number = 500, letterSpacing?: number) => css`
    font-family: 'Pretendard';
    font-size: ${calcRem(9)};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing}px;
  `,
} as const

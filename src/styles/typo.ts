import { css } from '@emotion/react'

export const calcRem = (px: number) => `${px / 16}rem`
export const typo = {
  Body_20: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    font-weight: 500;
  `,
  Body_18: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    font-weight: 500;
  `,
  Body_16: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    font-weight: 400;
  `,
  Body_14: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(13)};
    font-weight: 400;
  `,
  Body_12: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    font-weight: 400;
  `,
  Body_10: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(10)};
    font-weight: 400;
  `,
  Caption_11: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(11)};
    font-weight: 400;
  `,
  Caption_9: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(9)};
    font-weight: 500;
  `,
} as const

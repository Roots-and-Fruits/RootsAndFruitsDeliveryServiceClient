import { css } from "@emotion/react";

const PretendardFont = css`
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

const theme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    lightgray1: "#DFE2E7",
    midgray1: "#9FA4AE",
    background: "#F5F5F5",

    orange: "#EC6732",
  },
  font: {
    "head01-b-24": css`
      ${PretendardFont}
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    `,
    "head02-b-20": css`
      ${PretendardFont}
      font-size: 2rem;
      font-weight: 700;
      line-height: 140%;
    `,
    "head03-b-15": css`
      ${PretendardFont}
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 140%;
    `,
    "head04-sb-18": css`
      ${PretendardFont}
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 140%;
    `,
    "head05-n-24": css`
      ${PretendardFont}
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 140%;
    `,
    "head06-b-16": css`
      ${PretendardFont}
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 140%;
    `,
    "subhead-b-14": css`
      ${PretendardFont}
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 140%;
    `,
    "subhead-m-18": css`
      ${PretendardFont}
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 140%;
    `,
    "subhead-n-16": css`
      ${PretendardFont}
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
    `,
    "subhead-n-14": css`
      ${PretendardFont}
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
    `,
    "subhead-m-16": css`
      ${PretendardFont}
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 140%;
    `,
    "subhead-m-14": css`
      ${PretendardFont}
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 140%;
    `,
    "pretendard-01": css`
      ${PretendardFont}
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 140%;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}
export default theme;

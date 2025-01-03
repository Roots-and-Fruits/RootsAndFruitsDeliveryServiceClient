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
    red: "#ff2c2c",
    red2: "#FFD0D0",
    lightgray1: "#DFE2E7",
    lightgray2: "#D9D9D9",
    lightgray3: "#C4C4C4",
    lightgray4: "#B6B6B6",
    midgray1: "#9FA4AE",
    midgray2: "#F1F1F1",
    midgray3: "#6B6F77",
    darkgray: "#3E3F45",
    background0: "#F9F9F9",
    background: "#F6F6F6",
    background2: "#F5F5F5",

    orange: "#EC6732",
    lightorange: "#FFEDE7",
    green: "#3CA178",
    lightgreen: "#D1F2E4",
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
      line-height: normal;
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
    "subhead-sb-15": css`
      ${PretendardFont}
      font-size: 1.5rem;
      font-weight: 600;
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
    "subhead-n-15": css`
      ${PretendardFont}
      font-size: 1.5rem;
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
    "dialNumber-56": css`
      ${PretendardFont}
      font-size: 5.6rem;
      font-weight: 600;
      line-height: normal;
    `,
    "dialNumber-72": css`
      ${PretendardFont}
      font-size: 7.2rem;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 10px;
    `,
    "orderCheck-36": css`
      ${PretendardFont}
      font-size: 3.6rem;
      font-weight: 700;
      line-height: normal;
    `,
    "orderCheck-32": css`
      ${PretendardFont}
      font-size: 3.2rem;
      font-weight: 700;
      line-height: normal;
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

import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const orderCheckLayout = css`
  ${flexGenerator()};
  position: absolute;
  top: 0;
  left: 0;
  padding: 9.3rem 6.1rem 6.7rem;
  gap: 3rem;
  width: 100vw;
  height: 100%;
  background-color: pink;
`;



export const section2Container = css`
  ${flexGenerator("column")};
  width: 45rem;
  height: 100%;
`;

export const orderNumberStyle = (theme: Theme) => css`
  ${flexGenerator()}
  width: 100%;
  height: 12.6rem;
  padding: 2rem 0;
  border: 1px solid ${theme.color.lightgray3};
  background-color: ${theme.color.white};
`;

export const orderNumberSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["dialNumber-72"]}
`;

export const dialButtonWrapper = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

export const section3Container = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  width: 38rem;
  min-height: 100%;
  background-color: ${theme.color.white};
`;
export const section3InfoWrapper = css`
  ${flexGenerator("column", "start", "start")};
  gap: 2rem;
`;

export const section3Div = css`
  ${flexGenerator("column", "start", "start")};
  gap: 0.5rem;
`;
export const graySpan = (theme: Theme) => css`
  color: ${theme.color.lightgray4};
  ${theme.font["head01-b-24"]}
`;
export const blackSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["orderCheck-36"]}
`;

export const buttonWrapper = css`
  ${flexGenerator("row", "space-between", "center")};
  width: 100%;
  margin-top: auto;
`;

import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const section1Container = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  padding: 2rem;
  width: 27rem;
  height: 100%;
  gap: 1.5rem;
  border: 1px solid ${theme.color.lightgray3};
  background-color: ${theme.color.white};
  border-radius: 10px;
  overflow: scroll;
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

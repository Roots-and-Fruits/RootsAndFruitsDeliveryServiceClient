import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const layoutStyle = css`
  ${flexGenerator("column")}
  padding: 10rem 2rem 3rem;
  min-height: 100dvh;
`;

export const titleStyle = (theme: Theme) => css`
  width: 100%;
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]}
`;

export const chracterDivStyle = css`
  width: 30rem;
  height: 30rem;
  margin-top: 2.5rem;
  margin-bottom: 10.6rem;
`;

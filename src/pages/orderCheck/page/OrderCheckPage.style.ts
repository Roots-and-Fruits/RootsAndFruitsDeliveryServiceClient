import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const orderCheckLayout = (theme: Theme) => css`
  ${flexGenerator("row", "space-between", "flex-start")};
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem;
  gap: 3rem;
  width: 100vw;
  height: 100%;
  background-color: ${theme.color.white};
`;

export const refreshButton = (theme: Theme) => css`
  position: absolute;
  top: 30px;
  right: 50px;
  ${flexGenerator()};
  width: 8rem;
  height: 8rem;
  border-radius: 40px;
  background-color: ${theme.color.lightorange};
  cursor: pointer;
`;

export const iconStyle = css`
  width: 3.2rem;
  height: 3.2rem;
`;

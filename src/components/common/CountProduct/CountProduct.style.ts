import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const countProductContainer = css`
  ${flexGenerator("row", "space-between", "center")};
  gap: 3.5rem;
  width: 100%;
`;

export const productNameStyle = (theme: Theme) => css`
  width: 100%;
  ${theme.font["subhead-n-16"]};
  color: ${theme.color.black};
`;

export const productCountWrapper = css`
  ${flexGenerator("row", "space-between", "center")};
  gap: 1.5rem;
  width: 12rem;
  min-width: 12rem;
`;

export const iconStyle = css`
  width: 3.6rem;
  height: 3.6rem;
  cursor: pointer;
`;

export const countStyle = (theme: Theme) => css`
  ${theme.font["head06-b-16"]};
  color: ${theme.color.black};
`;

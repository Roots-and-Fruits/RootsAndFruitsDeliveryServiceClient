import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const cardWrapper = (theme: Theme) => css`
  ${flexGenerator()};
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${theme.color.lightorange};
`;

export const numberStyle = (theme: Theme) => css`
  color: ${theme.color.orange};
  ${theme.font["orderCheck-32"]}
`;

export const nameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["orderCheck-32"]}
`;

import { Theme, css } from "@emotion/react";

import { flexGenerator } from "@styles/generator";

export const payButtonStyle = (theme: Theme) => css`
  ${flexGenerator("column")}
  width: 13rem;
  height: 8rem;
  padding: 1.8rem 1rem;
  gap: 0.5rem;

  border: 1px solid ${theme.color.lightgray1};
  outline: none;
  border-radius: 10px;
  background-color: ${theme.color.white};
  cursor: pointer;
`;

export const paySpanStyle = (theme: Theme) => css`
  ${theme.font["subhead-n-15"]};
  color: ${theme.color.darkgray};
`;

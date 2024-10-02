import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const loginLayout = css`
  width: 100%;
  height: 100dvh;
  ${flexGenerator()};
  padding: 0 3rem;
`;

export const formStyle = css`
  width: 100%;
  ${flexGenerator("column", "flex-start", "flex-start")}
`;

export const inputWrapper = css`
  width: 100%;
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 0.8rem;

  margin-bottom: 2rem;
`;

export const labelStyle = (theme: Theme) => css`
  ${theme.font["head06-b-16"]};
`;

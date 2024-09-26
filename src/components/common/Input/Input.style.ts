import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const inputWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 1rem;
  width: 100%;
`;

export const labelStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["subhead-n-16"]}
`;

export const inputStyle = (theme: Theme) => css`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
  background-color: ${theme.color.white};
  ${theme.font["subhead-n-16"]}

  &::placeholder {
    color: ${theme.color.midgray1};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.color.orange};
  }

  &:disabled {
    background-color: ${theme.color.background};
    color: ${theme.color.midgray1};
  }
`;

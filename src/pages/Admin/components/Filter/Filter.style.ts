import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const filterContainer = css`
  ${flexGenerator("column")};
  gap: 2rem;
  width: 100%;
  margin-bottom: 5rem;
`;

export const filterTable = (theme: Theme) => css`
  width: 100%;
  border: 1px solid ${theme.color.lightgray2};
  ${flexGenerator("column", "flex-start", "flex-start")};

  gap: 1px;
  background-color: ${theme.color.lightgray2};
`;

export const rowStyle = (theme: Theme) => css`
  width: 100%;
  ${flexGenerator()};
  gap: 1px;
  background-color: ${theme.color.white};
`;

export const inputWrapper = css`
  width: 20rem;
`;

export const productSelectStyle = (theme: Theme) => css`
  width: 30rem;
  ${theme.font["subhead-m-14"]}

  & #react-select-3-listbox {
    max-height: 20rem;
  }
`;

export const statusSelectStyle = (theme: Theme) => css`
  width: 20rem;
  ${theme.font["subhead-m-14"]}
`;

export const buttonContainer = css`
  ${flexGenerator()};
  gap: 1rem;
  width: 21rem;
`;

import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const filterContainer = (theme: Theme) => css`
  ${flexGenerator("column")};
  gap: 2rem;
  width: 100%;
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

export const buttonContainer = (theme: Theme) => css`
  ${flexGenerator()};
  gap: 1rem;
  width: 21rem;
`;

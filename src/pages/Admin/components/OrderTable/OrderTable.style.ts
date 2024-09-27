import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const sectionStyle = css`
  width: 100%;
`;

export const tableHeader = css`
  ${flexGenerator("row", "space-between")};
`;

export const sectionTitle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  margin-bottom: 1.2rem;
`;

export const buttonContainer = css`
  width: 24.5rem;
  ${flexGenerator()};
  gap: 1rem;
`;

export const iconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const tableWrapper = css`
  overflow-x: auto;
`;

export const tableStyle = (theme: Theme) => css`
  width: 170rem;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    border: 1px solid ${theme.color.black};
    text-align: center;
    height: 4rem;
    ${theme.font["subhead-b-14"]};
    line-height: 4rem;
    background-color: ${theme.color.background};
    padding: 0;
    min-width: 12rem;
  }
  td {
    ${theme.font["subhead-m-14"]};
    background-color: ${theme.color.white};
    padding: 0.8rem 0.5rem;
  }

  th:first-of-type,
  td:first-of-type {
    position: sticky;
    left: 0;
    background-color: ${theme.color.background};
    z-index: 2;
    border: 1px solid ${theme.color.black};
    min-width: 0;
    width: 5rem;
  }
`;

export const checkboxStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

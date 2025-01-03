import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const layoutStyle = css`
  ${flexGenerator("column", "center", "center")};
  width: 100%;
  min-height: 100dvh;
`;

export const iconStyle = (category: CategoryType) => (theme: Theme) =>
  css`
    width: 6.4rem;
    height: 6.4rem;

    & > path {
      fill: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    }
  `;

export const spanContainer = css`
  ${flexGenerator("column")};
  gap: 2.6rem;
  margin-top: 2rem;
`;

export const spanStyle = (theme: Theme) => css`
  ${theme.font["head01-b-24"]}
  color: ${theme.color.black};
`;

export const orderNumberWrapper = (category: CategoryType) => (theme: Theme) =>
  css`
    background-color: ${category === "experience"
      ? theme.color.lightgreen
      : theme.color.lightorange};
    padding: 1rem 1.5rem;
    border-radius: 10px;
  `;

export const orderNumberStyle = (category: CategoryType) => (theme: Theme) =>
  css`
    color: ${category === "experience"
      ? theme.color.green
      : theme.color.orange};
  `;

export const lastSpanWrapper = (theme: Theme) => css`
  ${flexGenerator()};
  width: 100%;
  text-align: center;
  ${theme.font["head04-sb-18"]}
`;

export const accountInfoContainer = (theme: Theme) => css`
  ${flexGenerator("column")};
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${theme.color.background2};
  border-radius: 10px;
`;

export const accountInfoStyle = css`
  ${flexGenerator("column")};
  gap: 0.3rem;
`;

export const accountInfoSbSpan = (theme: Theme) => css`
  ${theme.font["subhead-sb-15"]}
  color: ${theme.color.black};
`;

export const accountInfoNSpan = (theme: Theme) => css`
  ${theme.font["subhead-n-15"]}
  color: ${theme.color.black};
`;

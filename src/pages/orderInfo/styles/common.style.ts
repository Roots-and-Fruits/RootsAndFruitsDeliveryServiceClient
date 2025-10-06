import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const layoutStyle = css`
  ${flexGenerator("column", "flex-start")};
  padding: 8.6rem 2rem 17rem;
  width: 100%;
  min-height: 100dvh;
`;

export const sectionStyle = css`
  ${flexGenerator("row", "start", "center")};
  width: 100%;
`;

export const textStyle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  color: ${theme.color.black};
`;

export const coloredTextStyle = (category: CategoryType) => (theme: Theme) =>
  css`
    color: ${category === "experience"
      ? theme.color.green
      : theme.color.orange};
  `;

export const mainSectionStyle = css`
  ${flexGenerator("column", "start", "start")};
  gap: 3rem;
  width: 100%;
  margin-top: 4rem;
`;

export const buttonSectionStyle = (theme: Theme) => css`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 43rem;
  background-color: ${theme.color.white};
  padding: 2rem;
  ${flexGenerator("column")};
  gap: 1rem;
  z-index: 3;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.08);
`;

import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const mainSectionStyle = css`
  ${flexGenerator("column")}
  gap: 2.5rem;
  width: 100%;

  margin-top: 2.8rem;
`;

export const buttonSectionStyle = css`
  ${flexGenerator("column", "flex-start", "flex-end")};
  gap: 2rem;
  width: 100%;
  margin-top: auto;
`;

export const priceWrapperStyle = css`
  ${flexGenerator("column", "center", "flex-end")};
  width: 100%;
  gap: 0.6rem;
`;

export const discountWrapperStyle = css`
  ${flexGenerator("row", "center", "center")};
  gap: 0.4rem;
`;

export const infoIconStyle = (theme: Theme) => css`
  & path {
    fill: ${theme.color.midgray3};
  }
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const discountPriceStyle = (theme: Theme) => css`
  ${theme.font["subhead-n-16"]};
  text-align: end;
`;

export const totalPriceStyle = (theme: Theme) => css`
  ${theme.font["head01-b-24"]};
`;

export const discountModalContainer =
  (category: CategoryType) => (theme: Theme) =>
    css`
      width: 33rem;
      ${flexGenerator("column", "center", "flex-start")};
      padding: 3rem;

      h4 {
        ${theme.font["head02-b-20"]};
        margin-bottom: 1rem;
      }

      p {
        ${theme.font["subhead-m-16"]};
        color: ${theme.color.darkgray};
      }

      strong {
        ${theme.font["head06-b-16"]};
        color: ${category === "experience"
          ? theme.color.green
          : theme.color.orange};
      }
    `;

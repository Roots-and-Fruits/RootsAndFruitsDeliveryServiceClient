import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const checkboxWrapper = css`
  ${flexGenerator("row", "start", "center")};
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const checkedIconStyle = (category: CategoryType) => (theme: Theme) =>
  css`
    & path {
      fill: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    }
  `;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["subhead-n-14"]}
`;

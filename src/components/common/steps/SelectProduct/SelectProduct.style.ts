import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

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

export const totalPriceStyle = (theme: Theme) => css`
  ${theme.font["head01-b-24"]};
`;

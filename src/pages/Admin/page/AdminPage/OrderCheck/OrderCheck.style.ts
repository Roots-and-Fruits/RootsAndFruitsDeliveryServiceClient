import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const pageLayout = css`
  width: 100%;
  ${flexGenerator("column")};
  gap: 3rem;
`;

export const sectionStyle = css`
  width: 100%;
  overflow: auto;
`;

export const sectionTitle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  margin-bottom: 1.2rem;
`;

import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const section1Container = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  padding: 2rem;
  width: 26.8rem;
  height: 100%;
  gap: 1.5rem;
  border: 1px solid ${theme.color.lightgray3};
  border-radius: 10px;
`;

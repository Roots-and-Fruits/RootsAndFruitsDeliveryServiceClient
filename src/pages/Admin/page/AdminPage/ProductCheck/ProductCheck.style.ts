import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const pageLayout = css`
  width: 100%;
  ${flexGenerator("column")};
  gap: 5rem;
`;

import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const editSenderLayout = css`
  ${flexGenerator("column", "start", "start")};
  padding: 8.6rem 2rem 3rem;
  width: 100%;
  min-height: 100dvh;
`;
export const spanAndInputWrapper = css`
  ${flexGenerator("column", "start", "start")};
  gap: 1.2rem;
  width: 100%;
`;

export const spanStyle = (theme: Theme) => css`
  ${theme.font["head04-sb-18"]}
  color: ${theme.color.black};
`;

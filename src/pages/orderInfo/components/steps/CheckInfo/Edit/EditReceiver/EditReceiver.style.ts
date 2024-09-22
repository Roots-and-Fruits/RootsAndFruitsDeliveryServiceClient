import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const editReceiverLayout = css`
  ${flexGenerator("column", "start", "start")};
  padding: 8.6rem 2rem 3rem;
  width: 100%;
  min-height: 100dvh;
`;

export const receiverSpan = (theme: Theme) => css`
  ${theme.font["head04-sb-18"]}
  color: ${theme.color.black};
`;

export const mainSectionStyle = css`
  ${flexGenerator("column", "start", "start")};
  gap: 2.4rem;
  width: 100%;

  margin-top: 1.1rem;
`;

export const addressFormWrapper = css`
  ${flexGenerator("column", "start", "start")};
  gap: 1rem;
  width: 100%;
`;

export const zonecodeWrapper = css`
  ${flexGenerator("row", "center", "end")}
  gap: 1rem;
  width: 100%;
`;

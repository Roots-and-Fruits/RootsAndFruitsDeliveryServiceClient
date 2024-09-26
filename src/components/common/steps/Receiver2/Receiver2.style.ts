import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const mainSectionStyle = (theme: Theme) => css`
  ${flexGenerator("column")}
  gap: 1rem;
  width: 100%;
  margin-top: 5.8rem;

  input:disabled {
    background-color: ${theme.color.white};
    ${theme.font["subhead-n-16"]};
    color: ${theme.color.black};
  }
`;

export const zonecodeWrapper = css`
  ${flexGenerator("row", "center", "end")}
  gap: 1rem;
  width: 100%;

  button {
    height: 5.44rem;
    border-radius: 10px;
  }
`;

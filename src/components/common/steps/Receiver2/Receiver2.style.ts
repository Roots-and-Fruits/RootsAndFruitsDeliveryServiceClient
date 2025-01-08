import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

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

export const alertModal = css`
  width: 30rem;
  ${flexGenerator("column")};
  padding: 3rem;
`;

export const alertModalText = (category: CategoryType) => (theme: Theme) =>
  css`
    ${theme.font["head06-b-16"]}
    color: ${theme.color.black};
    text-align: center;

    & > strong {
      color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    }
  `;

export const buttonWrapper = css`
  width: 100%;
  margin-top: 2rem;
  ${flexGenerator("column")};
  gap: 1rem;
`;

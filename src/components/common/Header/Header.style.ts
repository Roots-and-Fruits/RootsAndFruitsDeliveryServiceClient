import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const headerContainer = (theme: Theme) => css`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  max-width: 43rem;
  height: 6rem;
  background-color: ${theme.color.white};
  padding: 0 2rem;

  ${flexGenerator()};
`;

export const headerSection = css`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const headerLeft = css`
  width: 15%;
`;

export const headerTitle = (theme: Theme) => css`
  width: 70%;

  color: ${theme.color.black};
  ${theme.font["subhead-m-18"]};
  justify-content: center;
`;

export const headerRight = css`
  width: 15%;
  justify-content: flex-end;
`;

export const iconStyle = css`
  width: 2.4rem;
`;

export const confrimModal = css`
  width: 30rem;
  ${flexGenerator("column")};
  padding: 3rem;
`;

export const confirmModalText = (category: CategoryType) => (theme: Theme) =>
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

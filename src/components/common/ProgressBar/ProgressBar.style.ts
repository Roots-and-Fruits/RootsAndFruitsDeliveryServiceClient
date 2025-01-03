import { css, Theme } from "@emotion/react";
import { CategoryType } from "@types";

export const progressBarContainer = (theme: Theme) => css`
  position: fixed;
  top: 6rem;
  z-index: 2;
  width: 100%;
  max-width: 43rem;
  height: 0.6rem;
  background-color: ${theme.color.lightgray1};
`;

export const progressBarStyle =
  (progress: number, category: CategoryType) => (theme: Theme) =>
    css`
      width: ${progress}%;
      height: 100%;
      background-color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    `;

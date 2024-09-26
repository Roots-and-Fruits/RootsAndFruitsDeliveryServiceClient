import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const modalContainer = css`
  width: 40rem;
  height: 60rem;
  padding: 7rem 3rem 3rem;
  ${flexGenerator("column", "flex-start", "flex-start")};
  gap: 4rem;

  & > div {
    width: 100%;
  }
`;

export const modalTitle = (theme: Theme) => css`
  ${theme.font["head01-b-24"]};
  width: 100%;
  ${flexGenerator()};
`;

export const wrapperStyle = css`
  width: 100%;
  ${flexGenerator("column", "flex-start", "flex-start")};
  gap: 1rem;
`;

export const subTitle = (theme: Theme) => css`
  ${theme.font["head06-b-16"]};
`;

export const radioWrapper = css`
  ${flexGenerator("row", "flex-start", "center")};
  gap: 1rem;
`;

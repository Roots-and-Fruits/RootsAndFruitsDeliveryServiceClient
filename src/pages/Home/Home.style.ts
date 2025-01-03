import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const homeLayout = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  padding: 0 2rem;
  min-height: 100dvh;
`;

export const homeHeader = css`
  margin-top: 10dvh;
  margin-bottom: 2rem;
`;

export const homeTitle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]};
  font-size: 3.2rem;
`;

export const homeSubTitle = (theme: Theme) => css`
  color: ${theme.color.lightgray3};
  ${theme.font["head02-b-20"]};
`;

export const menuContainer = css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 2rem;
`;

export const menuButton = (theme: Theme) => css`
  ${flexGenerator()}
  width: 100%;
  height: 20rem;
  gap: 2rem;
  border: 1px solid ${theme.color.lightgray1};
  padding: 1rem;
  border-radius: 1rem;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:first-of-type {
    background-color: ${theme.color.lightgreen};
  }
  &:last-of-type {
    background-color: ${theme.color.lightorange};
  }
`;

export const menuTitle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head02-b-20"]};
  text-align: center;
`;

export const menuImage = css`
  height: 100%;
  aspect-ratio: 1 / 1;
  & img {
    width: 100%;
  }
`;

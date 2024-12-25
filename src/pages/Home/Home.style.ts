import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const homeLayout = (theme: Theme) => css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  padding: 0 2rem;
  min-height: 100dvh;
  background-color: ${theme.color.background0};
`;

export const homeHeader = css`
  margin-top: 25dvh;
  margin-bottom: 4rem;
`;

export const homeTitle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]};
`;

export const homeSubTitle = (theme: Theme) => css`
  color: ${theme.color.lightgray4};
  ${theme.font["head02-b-20"]};
`;

export const menuContainer = css`
  ${flexGenerator()}
  width: 100%;
  gap: 2rem;
`;

export const menuButton = (theme: Theme) => css`
  ${flexGenerator("column")}
  width: 100%;
  gap: 0.4rem;
  border: 1px solid ${theme.color.lightgray3};
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
  ${theme.font["head06-b-16"]};
  text-align: center;
`;

export const menuImage = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  & img {
    width: 100%;
  }
`;

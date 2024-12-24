import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const homeLayout = css`
  ${flexGenerator("column")}
  padding: 0 2rem;
  min-height: 100dvh;
  position: relative;
`;

export const homeTitle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]};
  margin-bottom: 4rem;
  position: absolute;
  top: 20rem;
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
  border: 1px solid ${theme.color.darkgray};
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${theme.color.white};
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

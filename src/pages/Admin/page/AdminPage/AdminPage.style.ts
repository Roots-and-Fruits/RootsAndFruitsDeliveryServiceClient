import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const AdminLayout = (theme: Theme) => css`
  ${flexGenerator("column", "flex-start", "flex-start")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${theme.color.white};
`;

export const adminHeader = (theme: Theme) => css`
  ${flexGenerator("row", "space-between")};
  width: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  background-color: ${theme.color.white};
  z-index: 3;
`;

export const headerSection = css`
  display: flex;
  align-items: center;
`;

export const headerLogo = css`
  width: 15%;
  gap: 1rem;
`;

export const headerMenus = css`
  width: 70%;
  justify-content: center;
`;

export const headerRight = css`
  width: 15%;
  justify-content: flex-end;
`;

export const tabTextStyle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]};
`;

export const tabMenuStyle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]};
  font-weight: 400;
  color: ${theme.color.midgray1};
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    color: ${theme.color.orange};
  }
`;

export const activeTabMenuStyle = (theme: Theme) => css`
  font-weight: 700;
  color: ${theme.color.orange};
`;

export const logoutButton = (theme: Theme) => css`
  width: 10rem;
  height: 4rem;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.orange};
  border-radius: 0.4rem;
  color: ${theme.color.orange};
  ${theme.font["subhead-m-18"]}
  cursor: pointer;
  &:hover {
    background-color: ${theme.color.orange};
    color: ${theme.color.white};
  }
`;

export const pageLayout = () => css`
  width: 100%;
  margin-top: 8rem;
  padding: 2rem 10rem 5rem;
`;

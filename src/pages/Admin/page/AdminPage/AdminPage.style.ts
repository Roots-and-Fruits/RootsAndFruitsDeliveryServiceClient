import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const AdminLayout = (theme: Theme) => css`
  ${flexGenerator("row", "flex-start", "flex-start")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: ${theme.color.white};
`;

export const tapLayoutStyle = (theme: Theme) => css`
  ${flexGenerator("column", "flex-start", "flex-start")};
  min-width: 20rem;
  height: 100%;
  background-color: ${theme.color.background2};
`;

export const tabTextStyle = (theme: Theme) => css`
  ${theme.font["subhead-m-18"]}
  padding: 2rem;
`;

export const tabButtonStyle = (theme: Theme) => css`
  width: 100%;
  height: 5rem;
  color: ${theme.color.black};
  background-color: ${theme.color.background2};
  border: 1px solid ${theme.color.lightgray2};

  :active {
    background-color: ${theme.color.orange};
    color: ${theme.color.white};
  }
`;

export const activeTabButtonStyle = (theme: Theme) => css`
  background-color: ${theme.color.orange};
  color: ${theme.color.white};
`;

export const pageLayout = () => css`
  padding: 10rem;
`;

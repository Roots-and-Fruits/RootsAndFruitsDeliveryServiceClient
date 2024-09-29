import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const textSection = css`
  ${flexGenerator("row", "start", "start")};
  width: 100%;
`;

export const checkSpanText = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  color: ${theme.color.black};
`;

export const senderSection = (theme: Theme) => css`
  ${flexGenerator("row", "space-between", "start")};
  width: 100%;
  padding: 2rem;
  border: 1px solid ${theme.color.lightgray2};
  border-radius: 10px;

  margin-top: 2rem;
`;

export const senderSectionLeft = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")}
  gap: 0.4rem;
  span {
    ${theme.font["subhead-n-16"]};
    color: ${theme.color.black};
  }
`;

export const senderSectionRight = css`
  height: 3rem;
`;

export const receiverListSection = css`
  ${flexGenerator("column", "start", "start")};
  gap: 2rem;
  width: 100%;

  margin-top: 2.3rem;
  margin-bottom: 2rem;
`;

export const orderItemWrapper = css`
  width: 100%;
`;

export const orderItemInfoWrapper = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  gap: 2.5rem;
  width: 100%;
  margin-top: 1rem;
  padding: 2rem;
  position: relative;

  border: 1px solid ${theme.color.midgray2};
  border-radius: 10px;

  background-color: ${theme.color.background};
`;

export const closeIconStyle = css`
  position: absolute;
  top: 2rem;
  right: 2rem;

  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`;

export const infoContainer = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  gap: 0.4rem;
  span {
    ${theme.font["subhead-n-16"]};
  }
`;

export const editButtonWrapper = (theme: Theme) => css`
  width: 100%;
  button {
    background-color: ${theme.color.background};
  }
`;

export const productInfoWrapper = css`
  ${flexGenerator("row", "start", "center")}
`;

export const head03Style = (theme: Theme) => css`
  ${theme.font["head03-b-15"]}
  color: ${theme.color.black};
`;

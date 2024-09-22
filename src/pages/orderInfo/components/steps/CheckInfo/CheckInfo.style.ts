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
  color: ${theme.color.black};

  span:nth-of-type(1) {
    ${theme.font["head03-b-15"]}
  }

  span:nth-of-type(2),
  span:nth-of-type(3) {
    ${theme.font["subhead-n-16"]}
  }
`;

export const senderSectionRight = css`
  width: 8.2rem;
  height: 3rem;
`;

export const receiverListSection = css`
  ${flexGenerator("column", "start", "start")};
  gap: 2rem;
  width: 100%;

  margin-top: 2.3rem;
  margin-bottom: 2rem;
`;

export const orderItemWrapper = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  gap: 0.7rem;
  width: 100%;

  span:nth-of-type(1) {
    ${theme.font["head03-b-15"]}
    color: ${theme.color.black};
  }
`;

export const orderItemInfoWrapper = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  gap: 2.5rem;
  width: 100%;
  padding: 2rem;
  position: relative;

  border: 1px solid ${theme.color.midgray2};
  border-radius: 10px;

  background-color: ${theme.color.background};

  div:nth-of-type(1) {
    ${flexGenerator("column", "start", "start")};
    gap: 0.4rem;
    ${theme.font["subhead-n-16"]};
  }

  div:nth-of-type(2) {
    ${flexGenerator("column", "start", "start")};
    gap: 1rem;

    div:nth-of-type(1) {
      ${flexGenerator("column", "start", "start")};
      gap: 0.4rem;
      ${theme.font["subhead-n-16"]};
    }
  }

  div:nth-of-type(3) {
    ${flexGenerator("column", "start", "start")};
    gap: 1rem;

    span:nth-of-type(2) {
      ${theme.font["subhead-n-16"]};
    }
  }
`;

export const fixButtonSpanStyle = css`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

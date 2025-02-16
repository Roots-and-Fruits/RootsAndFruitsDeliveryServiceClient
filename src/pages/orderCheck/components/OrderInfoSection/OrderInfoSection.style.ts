import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const section3Container = (theme: Theme) => css`
  ${flexGenerator("column", "start", "start")};
  width: 35%;
  height: 100%;
  overflow-y: auto;
  background-color: ${theme.color.white};
`;

export const section3InfoWrapper = css`
  ${flexGenerator("column", "start", "start")};
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const section3Div = css`
  ${flexGenerator("column", "start", "start")};
  gap: 0.5rem;
`;

export const graySpan = (theme: Theme) => css`
  color: ${theme.color.lightgray4};
  ${theme.font["head02-b-20"]};
`;

export const blackSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]};
`;

export const statusStyle = (statusStyle: string) => (theme: Theme) =>
  css`
    color: ${statusStyle === "결제완료"
      ? theme.color.green
      : statusStyle === "결제취소"
      ? theme.color.red
      : statusStyle === "발송완료"
      ? theme.color.darkgray
      : theme.color.orange};
  `;

export const buttonWrapper = css`
  ${flexGenerator("row", "space-between", "center")};
  gap: 1rem;
  width: 100%;
  margin-top: auto;
`;

import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const deliveryDateLayout = css`
  ${flexGenerator("column", "flex-start", "flex-start")};
  gap: 3.5rem;
`;

export const deliveryDateTextWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")};
  gap: 1rem;
`;

export const deliveryDateTitleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head02-b-20"]};
`;

export const deliveryTextStyle = (theme: Theme) => css`
  white-space: pre;

  color: ${theme.color.lightgray2};
  ${theme.font["subhead-m-18"]};
`;

export const deliveryDateWrapper = css`
  ${flexGenerator("row", "flex-start", "flex-end")};
  gap: 2.2rem;
`;

export const deliveryDateInputWrapper = css`
  ${flexGenerator("row", "flex-start", "flex-end")};
  gap: 0.5rem;
`;

export const deliveryDateInputStyle = (theme: Theme) => css`
  width: 10rem;
  height: 4.8rem;

  ${theme.font["subhead-m-18"]};
`;

export const deliveryDateInputTextStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["subhead-m-18"]};
`;

export const deliveryDateButtonStyle = css`
  width: 10rem;
`;

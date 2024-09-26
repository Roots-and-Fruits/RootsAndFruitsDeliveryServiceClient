import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const deliveryDateLayout = css`
  ${flexGenerator("column", "flex-start", "flex-start")};
`;

export const deliveryDateTitleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head02-b-20"]};
`;

export const deliveryTextStyle = (theme: Theme) => css`
  width: 100%;

  color: ${theme.color.lightgray2};
  ${theme.font["subhead-m-18"]};
  margin-top: 0.8rem;
`;

export const inputContainer = css`
  ${flexGenerator("row", "flex-start", "flex-end")};
  gap: 1rem;
  margin-top: 3rem;

  & input {
    font-size: 1.6rem;
  }
`;
export const deliveryDateInputStyle = (theme: Theme) => css`
  height: 4.8rem;
  ${theme.font["subhead-m-18"]};
`;

export const wrapper = css`
  width: 12rem;
`;

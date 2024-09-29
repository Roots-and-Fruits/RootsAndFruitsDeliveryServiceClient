import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const buttonStyle = css`
  ${flexGenerator()}
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const buttonVariant = {
  fill: (theme: Theme) => css`
    width: 100%;
    height: 4.8rem;

    border-radius: 5px;

    ${theme.font["pretendard-01"]}
    color: ${theme.color.white};
    background-color: ${theme.color.orange};
  `,
  stroke: (theme: Theme) => css`
    width: 100%;
    height: 4.8rem;

    border: 1px solid ${theme.color.orange};
    border-radius: 5px;

    ${theme.font["pretendard-01"]}
    color: ${theme.color.orange};
    background-color: ${theme.color.white};
  `,
  smallStroke: (theme: Theme) => css`
    width: 100%;
    height: 3rem;

    border: 1px solid ${theme.color.orange};
    border-radius: 4px;

    ${theme.font["subhead-m-14"]}
    color: ${theme.color.orange};
    background-color: transparent;
  `,
  smallFill: (theme: Theme) => css`
    width: 100%;
    height: 3rem;

    border: 1px solid ${theme.color.orange};
    border-radius: 4px;

    ${theme.font["pretendard-01"]}
    color: ${theme.color.white};
    background-color: ${theme.color.orange};
  `,
  delete: (theme: Theme) => css`
    width: 100%;
    height: 3rem;

    border: 1px solid ${theme.color.orange};
    border-radius: 4px;

    ${theme.font["pretendard-01"]}
    color: ${theme.color.orange};
  `,
};

export const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  background-color: ${theme.color.lightgray1};
`;

export const iconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

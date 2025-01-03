import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";
import { CategoryType } from "@types";

export const buttonStyle = css`
  ${flexGenerator()}
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const buttonVariant = {
  fill: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 4.8rem;

      border-radius: 5px;

      ${theme.font["pretendard-01"]}
      color: ${theme.color.white};
      background-color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    `,
  stroke: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 4.8rem;

      border: 1px solid
        ${category === "experience" ? theme.color.green : theme.color.orange};
      border-radius: 5px;

      ${theme.font["pretendard-01"]}
      color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
      background-color: ${theme.color.white};
    `,
  smallStroke: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 3rem;

      border: 1px solid
        ${category === "experience" ? theme.color.green : theme.color.orange};
      border-radius: 4px;

      ${theme.font["subhead-m-14"]}
      color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
      background-color: transparent;
    `,
  smallFill: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 3rem;

      border: 1px solid
        ${category === "experience" ? theme.color.green : theme.color.orange};
      border-radius: 4px;

      ${theme.font["pretendard-01"]}
      color: ${theme.color.white};
      background-color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    `,
  delete: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 3rem;

      border: 1px solid
        ${category === "experience" ? theme.color.green : theme.color.orange};
      border-radius: 4px;

      ${theme.font["pretendard-01"]}
      color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    `,
  fillLightColor: (category: CategoryType) => (theme: Theme) =>
    css`
      width: 100%;
      height: 4.8rem;

      border-radius: 5px;

      ${theme.font["pretendard-01"]}
      color: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
      background-color: ${category === "experience"
        ? theme.color.lightgreen
        : theme.color.lightorange};
    `,
};

export const disabledStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  background-color: ${theme.color.lightgray1};
`;

export const iconStyle = (category: CategoryType) => (theme: Theme) =>
  css`
    width: 1.6rem;
    height: 1.6rem;

    & path {
      stroke: ${category === "experience"
        ? theme.color.green
        : theme.color.orange};
    }
  `;

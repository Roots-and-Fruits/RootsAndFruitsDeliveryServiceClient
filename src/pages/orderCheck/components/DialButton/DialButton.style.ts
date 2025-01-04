import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const buttonStyle = (index: number) => (theme: Theme) =>
  css`
    ${flexGenerator()};
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.color.lightgray3};
    background-color: ${index === 9 || index === 11
      ? theme.color.lightgray2
      : theme.color.white};
  `;

export const buttonSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["dialNumber-56"]};
`;

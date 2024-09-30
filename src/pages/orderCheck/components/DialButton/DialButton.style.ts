import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const buttonStyle = (index: number) => (theme: Theme) =>
  css`
    ${flexGenerator()};
    padding: 1rem;
    width: 15rem;
    height: 12.8rem;
    border: 1px solid ${theme.color.lightgray3};
    background-color: ${index === 9 || index === 11
      ? theme.color.lightgray2
      : theme.color.white};
  `;

export const buttonSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["dialNumber-56"]}
`;

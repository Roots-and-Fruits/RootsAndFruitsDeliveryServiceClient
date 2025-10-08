import { css, Theme } from "@emotion/react";

export const errorContainerStyle = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${theme.color.background0};
`;

export const errorContentStyle = (theme: Theme) => css`
  text-align: center;
  max-width: 50rem;
  width: 100%;
  padding: 4rem;
  background: ${theme.color.white};
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
`;

export const errorIconStyle = css`
  font-size: 6.4rem;
  margin-bottom: 2.4rem;
`;

export const errorTitleStyle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  color: ${theme.color.darkgray};
  margin-bottom: 1.6rem;
`;

export const errorMessageStyle = (theme: Theme) => css`
  ${theme.font["subhead-n-16"]}
  color: ${theme.color.midgray3};
  margin-bottom: 3.2rem;
`;

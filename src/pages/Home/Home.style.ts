import { css, Theme } from "@emotion/react";

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["head01-b-24"]}
`;

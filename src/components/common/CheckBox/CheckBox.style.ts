import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const checkboxWrapper = css`
  ${flexGenerator("row", "start", "center")};
  width: 100%;
  gap: 0.5rem;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["subhead-n-14"]}
`;

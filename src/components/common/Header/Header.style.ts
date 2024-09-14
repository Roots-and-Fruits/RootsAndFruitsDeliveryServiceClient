import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const headerContainer = css`
  ${flexGenerator()}
  width: 100%;
  height: 6rem;
  position: relative;
`;

export const iconStyle = css`
  width: 3.8rem;
  height: 3rem;
  position: absolute;
  left: 0.7rem;
`;

export const textStyle = (theme: Theme) => css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${theme.color.black};
  ${theme.font["subhead-m-18"]}
`;

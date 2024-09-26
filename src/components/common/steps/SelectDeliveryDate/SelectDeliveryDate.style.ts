import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const mainSectionStyle = css`
  ${flexGenerator("column", "start", "start")}
  gap: 3.6rem;
  width: 100%;
  margin-top: 2.8rem;
`;

export const radioWrapper = css`
  ${flexGenerator()};
  gap: 1rem;
`;

export const textWrapper = css`
  ${flexGenerator("column", "start", "start")}
  gap: 2.8rem;
  width: 100%;
`;

export const calendarWrapper = css`
  margin-bottom: 3rem;
`;

export const normalText = (theme: Theme) => css`
  ${theme.font["subhead-n-14"]}
  color: ${theme.color.black};
`;

export const boldText = (theme: Theme) => css`
  ${theme.font["subhead-b-14"]}
  color: ${theme.color.black};
`;

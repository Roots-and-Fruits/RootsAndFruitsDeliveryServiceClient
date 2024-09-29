import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const layoutStyle = css`
  ${flexGenerator("column")};
  padding: 8.6rem 2rem 3rem;
  width: 100%;
  min-height: 100dvh;
`;

export const sectionStyle = css`
  ${flexGenerator("row", "start", "center")};
  width: 100%;
`;

export const textStyle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  color: ${theme.color.black};
`;

export const orangeTextStyle = (theme: Theme) => css`
  color: ${theme.color.orange};
`;

export const mainSectionStyle = css`
  ${flexGenerator("column", "start", "start")};
  gap: 3rem;
  width: 100%;
  margin-top: 5.8rem;
`;

export const checkboxWrapper = css`
  ${flexGenerator("column", "flex-start", "flex-start")}
  gap: 3rem;
`;

export const consentDetail = (theme: Theme) => css`
  margin-left: 0.5rem;
  color: ${theme.color.midgray1};
  text-decoration: underline;
`;

export const consentModalContainer = (theme: Theme) => css`
  width: 30rem;
  padding: 3rem;

  & > p {
    ${theme.font["subhead-m-14"]}
    color: ${theme.color.midgray3};
    margin: 2rem 0;
  }
`;

export const consentTitle = (theme: Theme) => css`
  ${theme.font["head06-b-16"]}
  color: ${theme.color.black};
`;

export const buttonSectionStyle = css`
  width: 100%;
  margin-top: auto;
`;

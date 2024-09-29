import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const layoutStyle = css`
  ${flexGenerator("column", "center", "center")};
  width: 100%;
  padding: 13.9rem 2rem 3rem;
  min-height: 100dvh;
`;

export const iconStyle = css`
  width: 6.4rem;
  height: 6.4rem;
`;

export const spanContainer = css`
  ${flexGenerator("column")};
  gap: 2.6rem;
  margin-top: 2rem;
`;

export const spanStyle = (theme: Theme) => css`
  ${theme.font["head01-b-24"]}
  color: ${theme.color.black};
`;

export const orderNumberWrapper = css`
  background-color: #ffede7;
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;

export const orderNumberStyle = (theme: Theme) => css`
  color: ${theme.color.orange};
`;

export const lastSpanWrapper = (theme: Theme) => css`
  ${flexGenerator()};
  width: 100%;
  text-align: center;
  ${theme.font["head04-sb-18"]}
`;

export const accountInfoContainer = (theme: Theme) => css`
  ${flexGenerator("column")};
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: ${theme.color.background2};
  border-radius: 10px;
`;

export const accountInfoStyle = css`
  ${flexGenerator("column")};
  gap: 0.3rem;
`;

export const accountInfoSbSpan = (theme: Theme) => css`
  ${theme.font["subhead-sb-15"]}
  color: ${theme.color.black};
`;

export const accountInfoNSpan = (theme: Theme) => css`
  ${theme.font["subhead-n-15"]}
  color: ${theme.color.black};
`;

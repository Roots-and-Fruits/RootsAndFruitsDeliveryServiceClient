import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const layoutStyle = css`
  ${flexGenerator("column", "center", "center")};
  width: 100%;
  padding: 13.9rem 7.3rem 3rem;
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
  ${theme.font["head05-n-24"]}
  color: ${theme.color.black};
`;

export const lastSpanWrapper = css`
  ${flexGenerator()};
  width: 100%;
  text-align: center;
`;

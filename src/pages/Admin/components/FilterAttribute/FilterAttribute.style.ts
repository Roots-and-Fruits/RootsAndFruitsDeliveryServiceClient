import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const attributeBox = css`
  ${flexGenerator("row", "flex-start", "center")};
  width: 100%;
`;

export const attributeLabel = (theme: Theme) => css`
  ${flexGenerator()};
  width: 20rem;
  height: 7rem;
  background-color: ${theme.color.background2};
  ${theme.font["head02-b-20"]};
`;

export const attributeContent = css`
  ${flexGenerator("row", "flex-start", "center")};
  flex: 1;
  padding-left: 3rem;

  height: 7rem;
`;

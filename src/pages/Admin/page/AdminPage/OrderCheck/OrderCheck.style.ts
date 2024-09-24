import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const sectionTitle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
`;

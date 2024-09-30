import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const orderCheckLayout = css`
  ${flexGenerator()};
  position: absolute;
  top: 0;
  left: 0;
  padding: 9.3rem 6.1rem 6.7rem;
  gap: 3rem;
  width: 100vw;
  height: 100%;
  background-color: pink;
`;

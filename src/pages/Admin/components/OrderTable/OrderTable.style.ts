import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const tableStyle = (theme: Theme) => css`
  width: 165rem;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    border: 1px solid ${theme.color.black};
    text-align: center;
    height: 4rem;
    ${theme.font["subhead-b-14"]};
    line-height: 4rem;
    background-color: ${theme.color.background};
    padding: 0;
    max-width: 30rem;
  }
  td {
    ${theme.font["subhead-m-14"]};
    background-color: ${theme.color.white};
    padding: 0.8rem 0.5rem;
  }

  th:first-of-type,
  td:first-of-type {
    position: sticky;
    left: 0;
    background-color: ${theme.color.background};
    z-index: 2;
    border: 1px solid ${theme.color.black};
    box-shadow: 2px 0 5px -2px rgba(0, 0, 0, 0.3); // 왼쪽에 그림자 추가하여 테두리 대체
  }
`;

import { Theme } from "@emotion/react";
import { css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const sectionStyle = css`
  width: 100%;
`;

export const tableHeader = css`
  ${flexGenerator("row", "space-between")};
`;

export const sectionTitle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]}
  margin-bottom: 1.2rem;
`;

export const buttonContainer = css`
  width: 24.5rem;
  ${flexGenerator()};
  gap: 1rem;
`;

export const iconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const tableWrapper = css`
  overflow-x: auto;
`;

export const tableStyle = (theme: Theme) => css`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    border: 1px solid ${theme.color.black};
    text-align: center;
    ${theme.font["subhead-b-14"]};
    line-height: 4rem;
    background-color: ${theme.color.background};
    padding: 0;
    min-width: 10rem;
  }
  td {
    ${theme.font["subhead-m-14"]};
    background-color: ${theme.color.white};
    padding: 0.8rem 0.5rem;
    vertical-align: middle;
  }

  th:first-of-type,
  td:first-of-type {
    position: sticky;
    left: 0;
    background-color: ${theme.color.background};
    z-index: 2;
    border: 1px solid ${theme.color.black};
    min-width: 0;
    width: 5rem;
  }

  /* 상품명 */
  th:nth-of-type(4),
  td:nth-of-type(4) {
    width: 20rem;
  }

  /* 접수 날짜 */
  th:nth-of-type(2),
  td:nth-of-type(2),
  /* 전화번호 */
  th:nth-of-type(6),
  td:nth-of-type(6),
  th:nth-of-type(8),
  td:nth-of-type(8),
  /* 비고 */
  th:nth-of-type(12),
  td:nth-of-type(12) {
    width: 15rem;
  }
`;

export const checkboxStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const numberText = css`
  ${flexGenerator()};
`;

export const copyIconStyle = (theme: Theme) => css`
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${theme.color.lightgray3};
  }
`;

export const confrimModal = css`
  ${flexGenerator("column")};
  padding: 2rem;
  gap: 2rem;
  width: 35rem;

  & hr {
    width: 100%;
  }
`;

export const modalTitle = (theme: Theme) => css`
  ${theme.font["head02-b-20"]};
`;

export const productText = (theme: Theme) => css`
  ${theme.font["head06-b-16"]};
`;

export const modalNotice = (theme: Theme) => css`
  ${theme.font["head06-b-16"]};
`;

export const noteTdBox = (theme: Theme) => css`
  transition: 0.3s;

  &:hover {
    background-color: ${theme.color.lightgray1};
  }
`;

export const notesInput = css`
  width: 100%;
  height: 100%;
`;

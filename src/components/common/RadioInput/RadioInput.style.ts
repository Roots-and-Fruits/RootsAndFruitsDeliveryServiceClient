import { Theme, css } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const radioLabelStyle = (theme: Theme) => css`
  ${flexGenerator()}
  gap: 0.1rem;
  padding: 0;
  cursor: pointer;

  input[type="radio"],
  span {
    vertical-align: middle;
    ${theme.font["subhead-n-14"]}
  }

  input[type="radio"] {
    appearance: none;
    border: 1px solid ${theme.color.black};
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    margin: 0 0.4rem 0 0;
  }

  input[type="radio"]:checked {
    background-color: ${theme.color.white};
    border: 4px solid ${theme.color.orange};
  }
`;

export const labelSpanStyle = (theme: Theme) => css`
  color: ${theme.color.black};
`;

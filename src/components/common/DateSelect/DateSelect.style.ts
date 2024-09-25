import { css, Theme } from "@emotion/react";

import { flexGenerator } from "@styles/generator";

export const customInputContainer = css`
  position: relative;
`;

export const customInputStyle = (hasValue: boolean) => (theme: Theme) =>
  css`
    padding: 1rem 1.6rem;

    width: 100%;
    max-width: 20rem;
    height: 5rem;

    border: 1px solid ${theme.color.lightgray1};
    border-radius: 10px;

    ${theme.font["pretendard-01"]};
    color: ${hasValue ? theme.color.darkgray : theme.color.midgray1};

    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: none;
      background-color: ${theme.color.white};
    }

    &::placeholder {
      color: ${theme.color.midgray1};
    }
  `;

export const iconStyle = (theme: Theme) => css`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1.95rem;
  right: 1.7rem;

  path {
    fill: ${theme.color.midgray1};
  }

  cursor: pointer;
`;

export const dataPickerWrapper = css`
  width: 100%;
  max-width: 20rem;
  height: 5rem;

  & .react-datepicker-wrapper {
    width: 100%;
    & .react-datepicker__input-container {
      width: 100%;

      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
      }
    }
  }

  & .react-datepicker {
    width: 300px;
    height: 230px;

    font-size: 14px;

    & .react-datepicker__month-container {
      width: 100%;
      height: 100%;

      & .react-datepicker__current-month {
        font-size: 16px;
      }

      & .react-datepicker__day-names {
        display: flex;
        justify-content: space-evenly;

        margin-top: 10px;
      }

      & .react-datepicker__month {
        height: calc(100% - 65px);

        ${flexGenerator("column", "space-evenly")};

        & .react-datepicker__week {
          width: 100%;
          ${flexGenerator("row", "space-evenly")};

          & .react-datepicker__day {
            ${flexGenerator()};

            width: 24px;
            height: 20px;
          }
        }
      }
    }
  }
`;

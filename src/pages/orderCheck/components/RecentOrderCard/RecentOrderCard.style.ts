import { css, Theme } from "@emotion/react";
import { flexGenerator } from "@styles/generator";

export const cardWrapper = (deliveryStatus: string) => (theme: Theme) =>
  css`
    ${flexGenerator("row", "space-between", "center")};
    gap: 1rem;
    width: 100%;
    padding: 1.5rem 1.2rem;
    border-radius: 10px;
    background-color: ${deliveryStatus === "결제완료"
      ? theme.color.lightgreen
      : deliveryStatus === "결제취소"
      ? theme.color.red2
      : theme.color.lightorange};
  `;

export const numberStyle = (deliveryStatus: string) => (theme: Theme) =>
  css`
    color: ${deliveryStatus === "결제완료"
      ? theme.color.green
      : deliveryStatus === "결제취소"
      ? theme.color.red
      : theme.color.orange};
    ${theme.font["orderCheck-32"]}
  `;

export const nameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font["orderCheck-32"]}
`;

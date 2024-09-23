import { HTMLAttributes } from "react";
import { createPortal } from "react-dom";

import { toastMessageStyle, toastWrapperStyle } from "./Toast.style";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  toastBottom: number;
}

const portalElement = document.getElementById("modal") as HTMLElement;

const Toast = ({ children, isVisible, toastBottom, ...props }: ToastProps) => {
  return createPortal(
    <div css={toastWrapperStyle(isVisible, toastBottom)} {...props}>
      <span css={toastMessageStyle}>{children}</span>
    </div>,
    portalElement
  );
};

export default Toast;

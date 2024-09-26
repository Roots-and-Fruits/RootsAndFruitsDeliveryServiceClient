import { ButtonHTMLAttributes } from "react";
import {
  buttonStyle,
  buttonVariant,
  disabledStyle,
  iconStyle,
} from "./Button.style";
import { IcFix } from "@svg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "fill" | "stroke" | "smallStroke" | "smallFill";
  disabled?: boolean;
  isIcon?: boolean;
}

const Button = ({
  variant,
  disabled,
  isIcon,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonVariant[variant], disabled && disabledStyle]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {isIcon && <IcFix css={iconStyle} />}
    </button>
  );
};

export default Button;

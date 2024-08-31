import { ButtonHTMLAttributes } from "react";
import { buttonStyle, buttonVariant, disabledStyle } from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "fill" | "stroke";
  disabled?: boolean;
}

const Button = ({ variant, disabled, onClick, children }: ButtonProps) => {
  return (
    <button
      css={[buttonStyle, buttonVariant[variant], disabled && disabledStyle]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

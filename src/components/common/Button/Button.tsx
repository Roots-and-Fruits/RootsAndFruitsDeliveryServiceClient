import { ButtonHTMLAttributes } from "react";
import {
  buttonStyle,
  buttonVariant,
  disabledStyle,
  iconStyle,
} from "./Button.style";
import { IcFix } from "@svg";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant:
    | "fill"
    | "stroke"
    | "smallStroke"
    | "smallFill"
    | "delete"
    | "fillLightColor";
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
  const [category] = useAtom(categoryAtom);

  return (
    <button
      css={[
        buttonStyle,
        buttonVariant[variant](category),
        disabled && disabledStyle,
      ]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {isIcon && <IcFix css={iconStyle(category)} />}
    </button>
  );
};

export default Button;

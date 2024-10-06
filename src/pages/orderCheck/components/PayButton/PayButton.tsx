import { ButtonHTMLAttributes } from "react";
import { buttonStyle, buttonVariant } from "./PayButton.style";

export interface PayButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "fill" | "stroke";
  onClick: () => void;
}

const PayButton = ({ variant, onClick, children }: PayButtonProps) => {
  return (
    <button onClick={onClick} css={[buttonStyle, buttonVariant[variant]]}>
      {children}
    </button>
  );
};

export default PayButton;

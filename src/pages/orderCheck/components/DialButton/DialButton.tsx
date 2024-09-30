import { ButtonHTMLAttributes } from "react";
import { buttonSpan, buttonStyle } from "./DialButton.style";

export interface DialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  index: number;
}

const DialButton = ({ onClick, index, children }: DialButtonProps) => {
  return (
    <button onClick={onClick} css={buttonStyle(index)}>
      <span css={buttonSpan}>{children}</span>
    </button>
  );
};

export default DialButton;

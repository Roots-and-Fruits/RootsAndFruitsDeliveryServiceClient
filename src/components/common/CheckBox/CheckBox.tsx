import { IcCheckbox, IcCheckedTrue } from "@svg";
import { InputHTMLAttributes, ReactNode } from "react";
import { checkboxWrapper, iconStyle, textStyle } from "./CheckBox.style";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onClick: () => void;
  children: ReactNode;
}

const CheckBox = ({ isChecked, onClick, children }: CheckBoxProps) => {
  return (
    <div css={checkboxWrapper}>
      <span css={iconStyle} onClick={onClick}>
        {isChecked ? <IcCheckedTrue /> : <IcCheckbox />}
      </span>
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default CheckBox;

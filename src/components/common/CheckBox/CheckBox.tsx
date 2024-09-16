import { IcCheckbox } from "@svg";
import React, { InputHTMLAttributes, ReactNode } from "react";
import { checkboxWrapper, iconStyle, textStyle } from "./CheckBox.style";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

const CheckBox = ({ isChecked, onChange, children }: CheckBoxProps) => {
  return (
    <div css={checkboxWrapper}>
      <span css={iconStyle}>
        <IcCheckbox />
      </span>
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default CheckBox;

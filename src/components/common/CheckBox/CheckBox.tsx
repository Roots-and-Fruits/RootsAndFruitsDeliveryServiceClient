import { IcCheckbox, IcCheckedTrue } from "@svg";
import { InputHTMLAttributes, ReactNode } from "react";
import {
  checkboxWrapper,
  checkedIconStyle,
  iconStyle,
  textStyle,
} from "./CheckBox.style";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onClick: () => void;
  children: ReactNode;
}

const CheckBox = ({ isChecked, onClick, children }: CheckBoxProps) => {
  const [category] = useAtom(categoryAtom);

  return (
    <div css={checkboxWrapper} onClick={onClick}>
      <span css={iconStyle}>
        {isChecked ? (
          <IcCheckedTrue css={checkedIconStyle(category)} />
        ) : (
          <IcCheckbox />
        )}
      </span>
      <span css={textStyle}>{children}</span>
    </div>
  );
};

export default CheckBox;

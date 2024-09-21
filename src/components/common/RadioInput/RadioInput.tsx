import React, { HTMLAttributes } from "react";
import { labelSpanStyle, radioLabelStyle } from "./RadioInput.style";

export interface RadioInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RadioInput = ({
  value,
  name,
  checked,
  onChange,
  label,
}: RadioInputProps) => {
  return (
    <label css={radioLabelStyle}>
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span css={labelSpanStyle}>{label}</span>
    </label>
  );
};

export default RadioInput;

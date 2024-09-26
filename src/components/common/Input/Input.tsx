import React, { HTMLAttributes } from "react";
import { inputStyle, inputWrapper, labelStyle } from "./Input.style";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type: string;
  inputLabel?: string;
  disabled?: boolean;
}

const Input = ({
  value,
  placeholder,
  onChange,
  name,
  type,
  inputLabel,
  disabled,
}: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div css={inputWrapper}>
      {inputLabel && <span css={labelStyle}>{inputLabel}</span>}
      <input
        css={inputStyle}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;

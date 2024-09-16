import React, { HTMLAttributes } from "react";
import { inputStyle, inputWrapper, labelStyle } from "./Input.style";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  inputLabel?: string;
}

const Input = ({
  value,
  placeholder,
  onChange,
  type,
  inputLabel,
}: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <div css={inputWrapper}>
      {inputLabel && <span css={labelStyle}>{inputLabel}</span>}
      <input
        css={inputStyle}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;

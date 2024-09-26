import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import React, { InputHTMLAttributes } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  dataPickerWrapper,
  customInputContainer,
  customInputStyle,
} from "./DateSelect.style";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

interface DateSelectProps {
  selected: dayjs.Dayjs | null;
  onChange: (date: dayjs.Dayjs | null) => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => {
    const hasValue = !!value;
    return (
      <div css={customInputContainer} onClick={onClick}>
        <input
          css={customInputStyle(hasValue)}
          ref={ref}
          value={value}
          readOnly
          placeholder={placeholder}
        />
      </div>
    );
  }
);

const DateSelect = ({ selected, onChange }: DateSelectProps) => {
  return (
    <div css={dataPickerWrapper}>
      <DatePicker
        selected={selected ? selected.toDate() : null}
        onChange={(date) => onChange(date ? dayjs(date) : null)}
        placeholderText={`YYYY.MM.DD`}
        dateFormat="yyyy.MM.dd"
        customInput={
          <CustomInput
            value={selected ? selected.format("YYYY.MM.DD") : ""}
            placeholder="YYYY.MM.DD"
          />
        }
        locale={ko}
      />
    </div>
  );
};

export default DateSelect;

import { useState } from "react";
import { Button, DateSelect } from "@components";
import FilterAttribute from "../FilterAttribute/FilterAttribute";
import {
  buttonContainer,
  filterContainer,
  filterTable,
  productSelectStyle,
  rowStyle,
  statusSelectStyle,
} from "./Filter.style";

import "react-datepicker/dist/react-datepicker.css";
import { Dayjs } from "dayjs";
import Select, { SingleValue } from "react-select";

interface Option {
  value: string;
  label: string;
}

const statusOptions: Option[] = [
  { value: "접수 완료", label: "접수 완료" },
  { value: "결제 완료", label: "결제 완료" },
  { value: "결제 취소", label: "결제 취소" },
  { value: "발송 완료", label: "발송 완료" },
];

const Filter = () => {
  const [orderReceivedDate, setOrderReceivedDate] = useState<Dayjs | null>(
    null
  );
  const [deliveryDate, setDeliveryDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState(statusOptions[1]);

  const handleStatusChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      setStatus(selectedOption);
    }
  };

  return (
    <article css={filterContainer}>
      <div css={filterTable}>
        <div css={rowStyle}>
          <FilterAttribute label="접수 날짜">
            <DateSelect
              selected={orderReceivedDate}
              onChange={setOrderReceivedDate}
            />
          </FilterAttribute>
          <FilterAttribute label="배송 날짜">
            <DateSelect selected={deliveryDate} onChange={setDeliveryDate} />
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상품">
            <Select
              css={productSelectStyle}
              options={[
                { value: "접수완료", label: "접수 완료" },
                { value: "결제완료", label: "결제 완료" },
                { value: "결제취소", label: "결제 취소" },
                { value: "발송완료", label: "발송 완료" },
              ]}
              placeholder="상품을 선택해주세요"
            />
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상태">
            <Select
              css={statusSelectStyle}
              options={statusOptions}
              placeholder="상태을 선택해주세요"
              defaultValue={status}
              onChange={handleStatusChange}
            />
          </FilterAttribute>
        </div>
      </div>

      <div css={buttonContainer}>
        <Button variant="stroke">초기화</Button>
        <Button variant="fill">검색</Button>
      </div>
    </article>
  );
};

export default Filter;

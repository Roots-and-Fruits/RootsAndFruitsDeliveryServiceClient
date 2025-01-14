import { useEffect, useState } from "react";
import { Button, DateSelect, Input } from "@components";
import FilterAttribute from "../FilterAttribute/FilterAttribute";
import {
  buttonContainer,
  filterContainer,
  filterTable,
  inputWrapper,
  productSelectStyle,
  rowStyle,
  statusSelectStyle,
} from "./Filter.style";

import "react-datepicker/dist/react-datepicker.css";
import { Dayjs } from "dayjs";
import Select from "react-select";
import { useFetchProductAll } from "@apis/domains/admin/useFetchProductAll";

interface Option {
  value: string;
  label: string;
}

const statusOptions: Option[] = [
  { value: "접수완료", label: "접수 완료" },
  { value: "결제완료", label: "결제 완료" },
  { value: "결제취소", label: "결제 취소" },
  { value: "발송완료", label: "발송 완료" },
];

interface FilterProps {
  filterRef: {
    orderNumberRef: React.MutableRefObject<string | null>;
    senderNameRef: React.MutableRefObject<string | null>;
    recipientNameRef: React.MutableRefObject<string | null>;
    orderReceivedDateRef: React.MutableRefObject<Dayjs | null>;
    deliveryDateRef: React.MutableRefObject<Dayjs | null>;
    productRef: React.MutableRefObject<Option | null>;
    statusRef: React.MutableRefObject<Option | null>;
  };
  handleSearchClick: () => void;
  handleResetClick: () => void;
}

interface GroupedOption {
  readonly label: string;
  readonly options: readonly Option[];
}

const Filter = ({
  filterRef,
  handleSearchClick,
  handleResetClick,
}: FilterProps) => {
  const [groupedOptions, setGroupedOptions] = useState<GroupedOption[]>([
    {
      label: "체험 상품",
      options: [],
    },
    {
      label: "판매 상품",
      options: [],
    },
  ]);

  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [senderName, setSenderName] = useState<string | null>(null);
  const [recipientName, setRecipientName] = useState<string | null>(null);
  const [orderReceivedDate, setOrderReceivedDate] = useState<Dayjs | null>(
    null
  );
  const [deliveryDate, setDeliveryDate] = useState<Dayjs | null>(null);
  const [product, setProduct] = useState<Option | null>(null);
  const [status, setStatus] = useState<Option | null>(null);

  const { isSuccess: isSuccessProduct, data: productData } =
    useFetchProductAll();

  useEffect(() => {
    if (isSuccessProduct && productData) {
      const prouctData = productData.productList.map((product) => ({
        value: product.productName,
        label: product.productName,
      }));
      const experienceData = productData.trialProductList.map((product) => ({
        value: product.productName,
        label: product.productName,
      }));

      setGroupedOptions((prev) => {
        return [
          { ...prev[0], options: experienceData },
          { ...prev[1], options: prouctData },
        ];
      });
    }
  }, [isSuccessProduct, productData]);

  const handleResetState = () => {
    setOrderNumber(null);
    setSenderName(null);
    setRecipientName(null);
    setOrderReceivedDate(null);
    setDeliveryDate(null);
    setProduct(null);
    setStatus(null);

    handleResetClick();
  };

  return (
    <article css={filterContainer}>
      <div css={filterTable}>
        <div css={rowStyle}>
          <FilterAttribute label="주문 번호">
            <div css={inputWrapper}>
              <Input
                type="text"
                value={orderNumber?.toString() || ""}
                placeholder="주문 번호"
                onChange={(e) => {
                  filterRef.orderNumberRef.current = e.target.value;
                  setOrderNumber(e.target.value);
                }}
              />
            </div>
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="보내는 분">
            <div css={inputWrapper}>
              <Input
                type="text"
                value={senderName || ""}
                placeholder="보내는 분"
                onChange={(e) => {
                  filterRef.senderNameRef.current = e.target.value;
                  setSenderName(e.target.value);
                }}
              />
            </div>
          </FilterAttribute>
          <FilterAttribute label="받는 분">
            <div css={inputWrapper}>
              <Input
                type="text"
                value={recipientName || ""}
                placeholder="받는 분"
                onChange={(e) => {
                  filterRef.recipientNameRef.current = e.target.value;
                  setRecipientName(e.target.value);
                }}
              />
            </div>
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="접수 날짜">
            <DateSelect
              selected={orderReceivedDate}
              onChange={(date) => {
                filterRef.orderReceivedDateRef.current = date;
                setOrderReceivedDate(date);
              }}
            />
          </FilterAttribute>
          <FilterAttribute label="출발 날짜">
            <DateSelect
              selected={deliveryDate}
              onChange={(date) => {
                filterRef.deliveryDateRef.current = date;
                setDeliveryDate(date);
              }}
            />
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상품">
            <Select
              css={productSelectStyle}
              options={groupedOptions}
              placeholder="상품을 선택해주세요"
              value={product}
              onChange={(selectedOption) => {
                const selectValue = selectedOption as Option | null;
                filterRef.productRef.current = selectedOption as Option | null;
                setProduct(selectValue);
              }}
            />
          </FilterAttribute>
          <FilterAttribute label="상태">
            <Select
              css={statusSelectStyle}
              options={statusOptions}
              placeholder="상태을 선택해주세요"
              value={status}
              onChange={(selectedOption) => {
                const selectValue = selectedOption as Option | null;
                filterRef.statusRef.current = selectValue;
                setStatus(selectValue);
              }}
            />
          </FilterAttribute>
        </div>
      </div>

      <div css={buttonContainer}>
        <Button variant="stroke" onClick={handleResetState}>
          초기화
        </Button>
        <Button variant="fill" onClick={handleSearchClick}>
          검색
        </Button>
      </div>
    </article>
  );
};

export default Filter;

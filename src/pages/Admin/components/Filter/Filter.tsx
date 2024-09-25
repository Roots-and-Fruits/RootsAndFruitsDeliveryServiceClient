import { useEffect, useState } from "react";
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
import { useFetchSailedProduct } from "@apis/domains/admin/useFetchSailedProduct";
import { useFetchOrders } from "@apis/domains/admin/useFetchOrders";

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

const Filter = () => {
  const [orderReceivedDate, setOrderReceivedDate] = useState<Dayjs | null>(
    null
  );
  const [deliveryDate, setDeliveryDate] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<Option | null>(null);
  const [product, setProduct] = useState<Option | null>(null);

  const [productOptions, setProductOptions] = useState<Option[]>([]);

  const { isSuccess: isSuccessProduct, data: productData } =
    useFetchSailedProduct();

  const query = {
    orderReceivedDate: orderReceivedDate?.format("YYYY-MM-DD") || "",
    deliveryDate: deliveryDate?.format("YYYY-MM-DD") || "",
    productName: product?.value || "",
    deliveryStatus: status?.value || "",
  };
  const { refetch } = useFetchOrders(query);

  const handleStatusChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      setStatus(selectedOption);
    }
  };

  const handleProductChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      setProduct(selectedOption);
    }
  };

  const handleResetClick = () => {
    setOrderReceivedDate(null);
    setDeliveryDate(null);
    setStatus(statusOptions[1]);
    setProduct(null);
  };

  const handleSearchClick = () => {
    refetch();
  };

  useEffect(() => {
    if (isSuccessProduct && productData) {
      const options: Option[] = [
        ...productData.trialSailedProductList.map((product) => ({
          value: product.productName,
          label: product.productName,
        })),
        ...productData.sailedproductList.map((product) => ({
          value: product.productName,
          label: product.productName,
        })),
      ];
      setProductOptions(options);
    }
  }, [isSuccessProduct, productData]);

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
              options={productOptions}
              placeholder="상품을 선택해주세요"
              onChange={handleProductChange}
              value={product}
            />
          </FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상태">
            <Select
              css={statusSelectStyle}
              options={statusOptions}
              placeholder="상태을 선택해주세요"
              value={status}
              onChange={handleStatusChange}
            />
          </FilterAttribute>
        </div>
      </div>

      <div css={buttonContainer}>
        <Button variant="stroke" onClick={handleResetClick}>
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

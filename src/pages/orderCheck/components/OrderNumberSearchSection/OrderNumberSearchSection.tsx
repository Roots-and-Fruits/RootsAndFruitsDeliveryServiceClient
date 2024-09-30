import { useState } from "react";
import DialButton from "../DialButton/DialButton";
import {
  dialButtonWrapper,
  orderNumberSpan,
  orderNumberStyle,
  section2Container,
} from "./OrderNumberSearchSection.style";

const OrderNumberSearchSection = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const handleButtonClick = (value: string) => {
    if (orderNumber.length < 4) {
      setOrderNumber((prev) => prev + value);
    }
  };

  const handleDelete = () => {
    setOrderNumber((prev) => prev.slice(0, -1));
  };

  const handleSearch = () => {
    alert(`조회할 번호: ${orderNumber}`);
  };
  return (
    <section css={section2Container}>
      <div css={orderNumberStyle}>
        <span css={orderNumberSpan}>{orderNumber}</span>
      </div>
      <div css={dialButtonWrapper}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "<-", "0", "조회"].map(
          (item, i) => (
            <DialButton
              key={i}
              onClick={() => {
                if (item === "<-") handleDelete();
                else if (item === "조회") handleSearch();
                else handleButtonClick(item);
              }}
              index={i}
            >
              {item}
            </DialButton>
          )
        )}
      </div>
    </section>
  );
};

export default OrderNumberSearchSection;

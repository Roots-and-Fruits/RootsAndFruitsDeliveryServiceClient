import { useState } from "react";
import {
  blackSpan,
  buttonWrapper,
  dialButtonWrapper,
  graySpan,
  orderCheckLayout,
  orderNumberSpan,
  orderNumberStyle,
  section2Container,
  section3Container,
  section3Div,
  section3InfoWrapper,
} from "./OrderCheckPage.style";
import { DialButton, PayButton, OrderTrackingSection } from "../components";

const OrderCheckPage = () => {
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
    <div css={orderCheckLayout}>
      <OrderTrackingSection />
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
      <section css={section3Container}>
        <div css={section3InfoWrapper}>
          <div css={section3Div}>
            <span css={graySpan}>주문번호</span>
            <span css={blackSpan}>{1004}</span>
          </div>
          <div css={section3Div}>
            <span css={graySpan}>이름</span>
            <span css={blackSpan}>유태승</span>
          </div>
          <div css={section3Div}>
            <span css={graySpan}>상품</span>
            {/* api 붙이고 수정 */}
            <span css={blackSpan}>귤 5kg (2박스) 1개</span>
          </div>
          <div css={section3Div}>
            <span css={graySpan}>총 금액</span>
            <span css={blackSpan}>{"100,000원"}</span>
          </div>
        </div>
        <div css={buttonWrapper}>
          <PayButton variant="stroke" onClick={() => {}}>
            결제취소
          </PayButton>
          <PayButton variant="fill" onClick={() => {}}>
            결제완료
          </PayButton>
        </div>
      </section>
    </div>
  );
};

export default OrderCheckPage;

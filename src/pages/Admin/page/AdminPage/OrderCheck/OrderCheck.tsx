import { Filter, OrderTable } from "@pages/Admin/components";
import { pageLayout, sectionStyle, sectionTitle } from "./OrderCheck.style";

interface Order {
  id: number;
  접수날짜: string;
  주문번호: string;
  상품명: string;
  보내는분: string;
  보내는분전화번호: string;
  받는분: string;
  받는분전화번호: string;
  받는분주소: string;
  배송날짜: string;
  결제내역: string;
}
const orders: Order[] = [
  {
    id: 1,
    접수날짜: "2024.09.25",
    주문번호: "1009",
    상품명: "",
    보내는분: "유태승",
    보내는분전화번호: "010 1234 5678",
    받는분: "유태승",
    받는분전화번호: "010 1234 5678",
    받는분주소:
      "서울시 광진구 구의동 광나루로 458, e편한세상 광진그랜드파크, 101동 1004호서울시 광진구 구의동 광나루로 458, e편한세상 광진그랜드파크, 101동 1004호",
    배송날짜: "2024.09.28",
    결제내역: "결제완료",
  },
  {
    id: 2,
    접수날짜: "2024.09.25",
    주문번호: "1009",
    상품명: "",
    보내는분: "유태승",
    보내는분전화번호: "010 1234 5678",
    받는분: "유태승",
    받는분전화번호: "010 1234 5678",
    받는분주소:
      "서울시 광진구 구의동 광나루로 458, e편한세상 광진그랜드파크, 101동 1004호",
    배송날짜: "2024.09.28",
    결제내역: "결제완료",
  },
];

const OrderCheck = () => {
  return (
    <div css={pageLayout}>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>검색필터</h3>
        <Filter />
      </section>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>주문내역</h3>
        <OrderTable orders={orders} />
      </section>
    </div>
  );
};

export default OrderCheck;

import { Filter } from "@pages/Admin/components";
import { pageLayout, sectionStyle, sectionTitle } from "./OrderCheck.style";

const OrderCheck = () => {
  return (
    <div css={pageLayout}>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>검색필터</h3>
        <Filter />
      </section>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>주문내역</h3>
      </section>
    </div>
  );
};

export default OrderCheck;

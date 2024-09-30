import PayButton from "../PayButton/PayButton";
import {
  blackSpan,
  buttonWrapper,
  graySpan,
  section3Container,
  section3Div,
  section3InfoWrapper,
} from "./OrderInfoSection.style";

const OrderInfoSection = () => {
  return (
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
  );
};

export default OrderInfoSection;

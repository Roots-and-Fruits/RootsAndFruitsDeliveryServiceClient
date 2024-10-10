import { orderInfoAtom, previousOrderNumberAtom } from "@stores";
import PayButton from "../PayButton/PayButton";
import {
  blackSpan,
  buttonWrapper,
  graySpan,
  section3Container,
  section3Div,
  section3InfoWrapper,
  statusStyle,
} from "./OrderInfoSection.style";
import { useAtom } from "jotai";
import { usePatchPayComplete } from "@apis/domains/orderCheck/usePatchPayComplete";
import { usePatchPayCancel } from "@apis/domains/orderCheck/usePatchPayCancel";

const OrderInfoSection = () => {
  const [previousOrderNumber] = useAtom(previousOrderNumberAtom);
  const [orderInfo] = useAtom(orderInfoAtom);
  const orderStatus = orderInfo?.orderList[0].deliveryStatus;

  const { mutate: mutatePayComplete } = usePatchPayComplete();
  const { mutate: mutatePayCancel } = usePatchPayCancel();

  const handlePayCancel = () => {
    mutatePayCancel(Number(previousOrderNumber));
  };
  const handlePayComplete = () => {
    mutatePayComplete(Number(previousOrderNumber));
  };
  return (
    <section css={section3Container}>
      <div css={section3InfoWrapper}>
        <div css={section3Div}>
          <span css={graySpan}>주문번호</span>
          <span css={blackSpan}>{previousOrderNumber}</span>
        </div>
        <div css={section3Div}>
          <span css={graySpan}>주문상태</span>
          <span css={[blackSpan, statusStyle(orderStatus ?? "")]}>
            {orderStatus}
          </span>
        </div>
        <div css={section3Div}>
          <span css={graySpan}>이름</span>
          <span css={blackSpan}>{orderInfo?.senderName}</span>
        </div>
        <div css={section3Div}>
          <span css={graySpan}>상품</span>
          {orderInfo?.orderList.map((order, i) => (
            <span
              key={i}
              css={blackSpan}
            >{`${order.productName} ${order.productCount}개`}</span>
          ))}
        </div>
        <div css={section3Div}>
          <span css={graySpan}>총 금액</span>
          <span css={blackSpan}>
            {orderInfo?.totalPrice.toLocaleString()}원
          </span>
        </div>
      </div>
      <div css={buttonWrapper}>
        <PayButton variant="stroke" onClick={handlePayCancel}>
          결제취소
        </PayButton>
        <PayButton variant="fill" onClick={handlePayComplete}>
          결제완료
        </PayButton>
      </div>
    </section>
  );
};

export default OrderInfoSection;

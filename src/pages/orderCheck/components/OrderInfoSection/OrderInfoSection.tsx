import { orderInfoAtom, previousOrderNumberAtom } from "@stores";
import PayButton from "../PayButton/PayButton";
import {
  blackSpan,
  buttonWrapper,
  graySpan,
  orangeSpan,
  section3Container,
  section3Div,
  section3InfoWrapper,
  statusStyle,
} from "./OrderInfoSection.style";
import { useAtom } from "jotai";
import { usePatchPayComplete } from "@apis/domains/orderCheck/usePatchPayComplete";
import { usePatchPayCancel } from "@apis/domains/orderCheck/usePatchPayCancel";
import { OrderInfo } from "@types";

const MATCH_BUNDLE_DISCOUNT = "묶음 배송 할인";

const OrderInfoSection = () => {
  const [previousOrderNumber] = useAtom(previousOrderNumberAtom);
  const [orderInfo] = useAtom(orderInfoAtom);
  const orderStatus = orderInfo?.orderList[0].deliveryStatus;
  const orderCount = orderInfo?.orderList.length;
  const mergedOrders = orderInfo?.orderList.reduce(
    (acc: OrderInfo[], current: OrderInfo) => {
      const existingOrder = acc.find(
        (order) => order.productName === current.productName
      );

      if (existingOrder) {
        existingOrder.productCount += current.productCount;
      } else {
        acc.push({ ...current });
      }

      return acc;
    },
    []
  );

  const productCount = (mergedOrders || []).reduce(
    (acc, current) => acc + current.productCount,
    0
  );

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
          <span css={graySpan}>접수일시</span>
          <span css={blackSpan}>{orderInfo?.orderList[0].orderTimeInfo}</span>
        </div>
        <div css={section3Div}>
          <span css={graySpan}>주문번호 / 주문상태</span>
          <div>
            <span css={blackSpan}>{`${previousOrderNumber} / `}</span>

            <span css={[blackSpan, statusStyle(orderStatus ?? "")]}>
              {orderStatus}
            </span>
          </div>
        </div>
        <div css={section3Div}>
          <span css={graySpan}>이름</span>
          <span css={blackSpan}>{orderInfo?.senderName}</span>
        </div>
        <div css={section3Div}>
          <span
            css={graySpan}
          >{`상품 (주문 ${orderCount}개 / 총 상품 ${productCount}개)`}</span>
          {(mergedOrders || []).map((order, i) => {
            const isBundleDiscount = order.productName.includes(
              MATCH_BUNDLE_DISCOUNT
            );
            return (
              <span
                key={i}
                css={isBundleDiscount ? orangeSpan : blackSpan}
              >{`${order.productName} ${order.productCount}개`}</span>
            );
          })}
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

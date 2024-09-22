import { Button, Header, ProgressBar } from "@components";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import { StepProps } from "@types";
import { buttonSectionStyle, layoutStyle } from "@pages/orderInfo/styles";
import {
  checkSpanText,
  fixButtonSpanStyle,
  orderItemInfoWrapper,
  orderItemWrapper,
  receiverListSection,
  senderSection,
  senderSectionLeft,
  senderSectionRight,
  textSection,
} from "./CheckInfo.style";

const CheckInfo = ({ onNext }: StepProps) => {
  const { orderPostDataState } = useOrderPostDataChange();
  const receivers = orderPostDataState.recipientInfo;
  return (
    <>
      <Header text="입력 정보 확인" />
      <ProgressBar progress={85.68} />
      <div css={layoutStyle}>
        <section css={textSection}>
          <span css={checkSpanText}>이대로 주문하시겠어요?</span>
        </section>
        <section css={senderSection}>
          <div css={senderSectionLeft}>
            <span>보내는 분</span>
            <span>{orderPostDataState.senderName}</span>
            <span>{orderPostDataState.senderPhone}</span>
          </div>
          <div css={senderSectionRight}>
            <Button variant="smallStroke" isIcon={true}>
              수정하기
            </Button>
          </div>
        </section>
        <section css={receiverListSection}>
          {receivers.map((receiver, i) => (
            <article css={orderItemWrapper}>
              <span>주문{i + 1}</span>
              <div css={orderItemInfoWrapper}>
                <span css={fixButtonSpanStyle}>
                  <Button variant="smallStroke" isIcon={true}>
                    수정하기
                  </Button>
                </span>
                <div>
                  <span>받는 분</span>
                  <span>{receiver.recipientName}</span>
                  <span>{receiver.recipientPhone}</span>
                  <span>
                    {`${receiver.recipientAddress}, ${receiver.recipientAddressDetail}`}
                  </span>
                </div>
                <div>
                  <span>선택상품</span>
                  <div>{/* 상품 정보 올 예정 */}</div>
                </div>
                <div>
                  <span>희망 배송일자</span>
                  <span>{receiver.deliveryDate}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
        <footer css={buttonSectionStyle}>
          <Button variant="stroke">택배 추가 접수하기</Button>
          <Button variant="fill">주문하기</Button>
        </footer>
      </div>
    </>
  );
};

export default CheckInfo;

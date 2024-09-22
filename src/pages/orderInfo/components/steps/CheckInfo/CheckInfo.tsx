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
import { useNavigate } from "react-router-dom";

const CheckInfo = ({ onNext }: StepProps) => {
  const { orderPostDataState, handleAddReceiver, handleSetIndex } =
    useOrderPostDataChange();
  const receivers = orderPostDataState.recipientInfo;
  const navigate = useNavigate();

  const handleSenderEdit = () => {
    navigate("/order-info/check-info/edit", { state: { type: "sender" } });
  };
  const handleReceiverEdit = (index: number) => {
    navigate("/order-info/check-info/edit", {
      state: { type: "receiver", index },
    });
  };
  const handleAddReceiverClick = () => {
    handleAddReceiver();
    handleSetIndex();
    navigate("/order-info/receiver1");
  };
  const handleNextClick = () => {
    onNext();
  };
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
            <Button
              variant="smallStroke"
              isIcon={true}
              onClick={handleSenderEdit}
            >
              수정하기
            </Button>
          </div>
        </section>
        <section css={receiverListSection}>
          {receivers.map((receiver, i) => (
            <article css={orderItemWrapper} key={i}>
              <span>주문{i + 1}</span>
              <div css={orderItemInfoWrapper}>
                <span css={fixButtonSpanStyle}>
                  <Button
                    variant="smallStroke"
                    isIcon={true}
                    onClick={() => handleReceiverEdit(i)}
                  >
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
          <Button variant="stroke" onClick={handleAddReceiverClick}>
            택배 추가 접수하기
          </Button>
          <Button variant="fill" onClick={handleNextClick}>
            주문하기
          </Button>
        </footer>
      </div>
    </>
  );
};

export default CheckInfo;

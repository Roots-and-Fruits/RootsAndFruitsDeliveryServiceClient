import { Button, Header, ProgressBar } from "@components";
import { ErrorType, StepProps } from "@types";
import { buttonSectionStyle, layoutStyle } from "@pages/orderInfo/styles";
import {
  checkSpanText,
  closeIconStyle,
  editButtonWrapper,
  head03Style,
  infoContainer,
  orderItemInfoWrapper,
  orderItemWrapper,
  receiverListSection,
  senderSection,
  senderSectionLeft,
  senderSectionRight,
  textSection,
} from "./CheckInfo.style";
import { useNavigate } from "react-router-dom";
import { usePostOrder } from "@apis/domains/service/usePostOrder";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { IcClose } from "@svg";

const CheckInfo = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    handleAddReceiver,
    setOrderNumberState,
    handleDeleteClick,
  } = useOrderPostDataChange();
  const { mutateAsync } = usePostOrder();
  const receivers = orderPostDataState.recipientInfo;
  const navigate = useNavigate();
  const [category] = useAtom(categoryAtom);

  const handleSenderEdit = () => {
    navigate(`/${category}/order-info/check-info/edit`, {
      state: { type: "sender" },
    });
  };
  const handleReceiverEdit = (index: number) => {
    navigate(`/${category}/order-info/check-info/edit`, {
      state: { type: "receiver", index },
    });
  };
  const handleAddReceiverClick = () => {
    handleAddReceiver();
    navigate(`/${category}/order-info/receiver1`);
  };
  const handleNextClick = () => {
    mutateAsync(orderPostDataState)
      .then((data) => {
        setOrderNumberState(data);
        onNext();
      })
      .catch((error: ErrorType) => {
        alert(error.message);
      });
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
            <h6 css={head03Style}>보내는 분</h6>
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
              <h6 css={head03Style}>주문{i + 1}</h6>
              <div css={orderItemInfoWrapper}>
                <IcClose
                  css={closeIconStyle}
                  onClick={() => handleDeleteClick(i)}
                />
                <div css={infoContainer}>
                  <h6 css={head03Style}>받는 분</h6>
                  <span>{receiver.recipientName}</span>
                  <span>{receiver.recipientPhone}</span>
                  <span>
                    {`${receiver.recipientAddress}, ${receiver.recipientAddressDetail}`}
                  </span>
                </div>
                <div css={infoContainer}>
                  <h6 css={head03Style}>선택상품</h6>
                  <div>
                    {receiver.productInfo
                      .filter((product) => product.productCount > 0)
                      .map((product, j) => (
                        <span key={j}>
                          {`${product.productName} ${product.productCount}개`}
                        </span>
                      ))}
                  </div>
                </div>
                {category === "product" && (
                  <div css={infoContainer}>
                    <h6 css={head03Style}>희망 배송일자</h6>
                    <span>
                      {receiver.selectedOption === "regular"
                        ? "일반 배송"
                        : receiver.deliveryDate}
                    </span>
                  </div>
                )}
                <span css={editButtonWrapper}>
                  <Button
                    variant="stroke"
                    isIcon={true}
                    onClick={() => handleReceiverEdit(i)}
                  >
                    수정하기
                  </Button>
                </span>
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

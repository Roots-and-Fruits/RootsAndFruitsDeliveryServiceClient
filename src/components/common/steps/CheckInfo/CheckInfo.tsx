import { Button, Header, Modal, ProgressBar } from "@components";
import { StepProps } from "@types";
import { buttonSectionStyle, layoutStyle } from "@pages/orderInfo/styles";
import {
  buttonWrapper,
  checkSpanText,
  closeIconStyle,
  confirmModalText,
  confrimModal,
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
import { useState } from "react";

const CheckInfo = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    handleAddReceiver,
    setOrderNumberState,
    handleDeleteClick,
    resetOrderPostData,
  } = useOrderPostDataChange();
  const { mutateAsync } = usePostOrder();
  const receivers = orderPostDataState.recipientInfo ?? [];
  const navigate = useNavigate();
  const [category] = useAtom(categoryAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const orderCount = receivers.length;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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

  const handleOrderClick = () => {
    mutateAsync(orderPostDataState)
      .then((data) => {
        setOrderNumberState(data);
        resetOrderPostData();
        localStorage.clear();
        onNext();
      })
      .catch(() => {
        alert(
          `필수 입력칸을 작성하지 않으셨습니다. \n혹은 이미 주문을 완료하지 않으셨나요?`
        );
        navigate(`/${category}`);
      });
  };

  const handleNextClick = () => {
    if (orderCount > 0) {
      setIsModalOpen(true);
    } else {
      alert("주문할 상품을 추가해주세요.");
    }
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
          <Button variant="fillLightOrange" onClick={handleAddReceiverClick}>
            택배 추가 접수하기
          </Button>
          <Button variant="fill" onClick={handleNextClick}>
            주문하기
          </Button>
        </footer>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <article css={confrimModal}>
              <p css={confirmModalText}>
                현재 <strong>{`${orderCount}건`}</strong>의 주문을 진행
                중입니다.
              </p>
              <p css={confirmModalText}>{`추가 주문 없이 이대로`}</p>
              <p css={confirmModalText}>{`주문을 완료하시겠습니까?`}</p>
              <div css={buttonWrapper}>
                <Button variant="stroke" onClick={handleAddReceiverClick}>
                  아니오, 더 추가할게요
                </Button>
                <Button variant="fill" onClick={handleOrderClick}>
                  네, 주문할게요
                </Button>
              </div>
            </article>
          </Modal>
        )}
      </div>
    </>
  );
};

export default CheckInfo;

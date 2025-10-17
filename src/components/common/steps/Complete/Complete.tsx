import { Button, ClipboardButton, Modal, PayButton } from "@components";
import { IcComplete } from "@svg";
import { useNavigate } from "react-router-dom";
import {
  accountInfoContainer,
  accountInfoModal,
  accountInfoNSpan,
  accountInfoSbSpan,
  accountInfoStyle,
  iconStyle,
  lastSpanWrapper,
  layoutStyle,
  orderNumberStyle,
  orderNumberWrapper,
  payButtonWrapper,
  spanContainer,
  spanStyle,
} from "./Complete.style";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useFetchOrderInfoWithOrderNumber } from "@apis/domains/orderCheck/useFetchOrderInfoWithOrderNumber";

const Complete = () => {
  const { orderNumberState } = useOrderPostDataChange();
  const { refetch: refetchOrderInfo } = useFetchOrderInfoWithOrderNumber(
    Number(orderNumberState)
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [category] = useAtom(categoryAtom);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAccountClick = () => {
    setIsModalOpen(true);
  };

  const handleButtonClick = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const handleRefetchOrderInfo = async () => {
    const result = await refetchOrderInfo();
    setTotalPrice(result.data?.totalPrice ?? 0);
  };

  useEffect(() => {
    if (orderNumberState) {
      handleRefetchOrderInfo();
    }
  }, [orderNumberState]);

  return (
    <div css={layoutStyle}>
      <IcComplete css={iconStyle(category)} />
      <div css={spanContainer}>
        <span css={spanStyle}>주문이 완료되었어요</span>
        <span css={[spanStyle, orderNumberWrapper(category)]}>
          {`주문번호: `}
          <span css={orderNumberStyle(category)}>{orderNumberState}</span>
        </span>
        <span css={[spanStyle, lastSpanWrapper]}>
          카운터에서 주문번호로 결제해주세요
        </span>
      </div>
      <footer css={buttonSectionStyle}>
        <Button variant="stroke" onClick={handleAccountClick}>
          계좌번호로 입금하시겠어요?
        </Button>
        <Button variant="fill" onClick={handleButtonClick}>
          홈으로
        </Button>
      </footer>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={accountInfoModal}>
            <div css={accountInfoContainer}>
              <div css={accountInfoStyle}>
                <span css={accountInfoSbSpan}>NH농협</span>
                <ClipboardButton />
              </div>
              <span css={accountInfoNSpan}>
                예금주 <span css={accountInfoSbSpan}>제주체험농장</span>
              </span>
            </div>
            <div css={payButtonWrapper}>
              <PayButton totalPrice={totalPrice} />
            </div>
          </article>
        </Modal>
      )}
    </div>
  );
};

export default Complete;

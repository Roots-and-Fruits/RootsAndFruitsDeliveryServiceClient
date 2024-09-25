import { Button, ClipboardButton, Header, ProgressBar } from "@components";
import { IcComplete } from "@svg";
import { useNavigate } from "react-router-dom";
import {
  accountInfoContainer,
  accountInfoNSpan,
  accountInfoSbSpan,
  accountInfoStyle,
  iconStyle,
  lastSpanWrapper,
  layoutStyle,
  spanContainer,
  spanStyle,
} from "./Complete.style";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useState } from "react";

const Complete = () => {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const navigate = useNavigate();

  const handleAccountClick = () => {
    setShowAccountInfo(true);
  };
  const handleButtonClick = () => {
    navigate("/product");
  };
  return (
    <>
      <Header text="주문 완료" />
      <ProgressBar progress={100} />
      <div css={layoutStyle}>
        <IcComplete css={iconStyle} />
        <div css={spanContainer}>
          <span css={spanStyle}>주문이 완료되었어요</span>
          <span css={spanStyle}>
            주문번호: <span>{}</span>
          </span>
          <span css={[spanStyle, lastSpanWrapper]}>
            카운터에서 주문번호로
            <br />
            결제해주세요
          </span>
        </div>
        <footer css={buttonSectionStyle}>
          {!showAccountInfo && (
            <Button variant="stroke" onClick={handleAccountClick}>
              계좌번호로 입금하시겠어요?
            </Button>
          )}
          {showAccountInfo && (
            <div css={accountInfoContainer}>
              <div css={accountInfoStyle}>
                <span css={accountInfoSbSpan}>픽플은행</span>
                <ClipboardButton />
              </div>
              <span css={accountInfoNSpan}>
                예금주 <span css={accountInfoSbSpan}>홍길동</span>
              </span>
            </div>
          )}
          <Button variant="fill" onClick={handleButtonClick}>
            홈으로
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Complete;

import { Button, Header, ProgressBar } from "@components";
import { IcComplete } from "@svg";
import { useNavigate } from "react-router-dom";
import {
  iconStyle,
  lastSpanWrapper,
  layoutStyle,
  spanContainer,
  spanStyle,
} from "./Complete.style";
import { buttonSectionStyle } from "@pages/orderInfo/styles";

const Complete = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
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
          <Button variant="fill" onClick={handleButtonClick}>
            홈으로
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Complete;

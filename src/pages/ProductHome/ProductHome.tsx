import { IcMainCharacter } from "@svg";
import { chracterDivStyle, layoutStyle, titleStyle } from "./ProductHome.style";
import { useNavigate } from "react-router-dom";
import { Button } from "@components";
import { buttonSectionStyle } from "@pages/orderInfo/styles";

const ProductHome = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/product/order-info/sender");
  };
  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        나무와 열매 체험 농장
        <br />
        상품 구매 주문서 작성
      </h1>
      <div css={chracterDivStyle}>
        <IcMainCharacter />
      </div>
      <footer css={buttonSectionStyle}>
        <Button variant="fill" onClick={handleButtonClick}>
          작성하기
        </Button>
      </footer>
    </div>
  );
};

export default ProductHome;

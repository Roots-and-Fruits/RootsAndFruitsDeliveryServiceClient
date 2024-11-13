import { IcMainCharacter } from "@svg";
import { chracterDivStyle, layoutStyle, titleStyle } from "./ProductHome.style";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@components";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

const ProductHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [, setCategory] = useAtom(categoryAtom);

  const handleButtonClick = () => {
    const categoryName = location.pathname.split("/")[1];
    localStorage.clear();
    setCategory(categoryName);
    navigate(`/${categoryName}/order-info/sender`);
  };
  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        제주체험농장
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

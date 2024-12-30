import { IcBack } from "@svg";
import {
  headerContainer,
  headerWrapper,
  iconStyle,
  textStyle,
} from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

const Header = () => {
  const [category] = useAtom(categoryAtom);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header css={headerContainer}>
      <div css={headerWrapper}>
        <span css={iconStyle} onClick={handleBackClick}>
          <IcBack />
        </span>
        <h4 css={textStyle}>
          {category === "product"
            ? "상품 구매 택배 접수"
            : "체험 과일 택배 접수"}
        </h4>
      </div>
    </header>
  );
};

export default Header;

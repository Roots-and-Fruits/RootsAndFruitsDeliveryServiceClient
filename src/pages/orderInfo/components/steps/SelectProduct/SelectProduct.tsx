import { Button, CountProduct, Header, ProgressBar } from "@components";
// import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import { mainSectionStyle } from "./SelectProduct.style";

const SelectProduct = ({ onNext }: StepProps) => {
  // const { orderPostDataState } = useOrderPostDataChange();

  const handleNextClick = () => {
    onNext();
  };
  return (
    <>
      <Header text="상품 선택" />
      <ProgressBar progress={57.12} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            보내실 상품의
            <br />
            <span css={orangeTextStyle}>수량</span>을 선택해주세요
          </div>
        </section>
        <section css={mainSectionStyle}>
          <CountProduct
            productName="귤 5kg - 18,000원"
            count={0}
            onCountChange={() => {}}
          />
        </section>
        <footer css={buttonSectionStyle}>
          <Button variant="fill" onClick={handleNextClick}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default SelectProduct;

import { Button, CountProduct, Header, ProgressBar } from "@components";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import { mainSectionStyle } from "./SelectProduct.style";
// import { useFetchProductList } from "@apis/domains/service/useFetchProductList";

const productList = [
  {
    prodcutId: 1,
    productName: "귤 5kg",
    productPrice: 18000,
  },
  {
    prodcutId: 2,
    productName: "귤 5kg (2박스)",
    productPrice: 18000,
  },
  {
    prodcutId: 3,
    productName: "귤 10kg",
    productPrice: 10,
  },
];

const SelectProduct = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();
  // const {data: productList} = useFetchProductList();

  const handleCountChange = (productIndex: number, newCount: number) => {
    const currentProductInfo =
      orderPostDataState.recipientInfo[currentRecipientIndex]?.productInfo ||
      [];
    const updatedProductInfo = [...currentProductInfo];
    if (updatedProductInfo[productIndex]) {
      updatedProductInfo[productIndex].productCount = newCount;
    } else {
      updatedProductInfo[productIndex] = {
        productId: productList[productIndex].prodcutId,
        productCount: newCount,
      };
    }

    handleRecipientInputChange(
      updatedProductInfo,
      "productInfo",
      currentRecipientIndex
    );
  };
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
          {productList.map((product, i) => {
            const productCount =
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.productInfo?.[i]?.productCount ?? 0;
            return (
              <CountProduct
                key={i}
                productName={product.productName}
                count={productCount}
                onCountChange={(newCount) => handleCountChange(i, newCount)}
              />
            );
          })}
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

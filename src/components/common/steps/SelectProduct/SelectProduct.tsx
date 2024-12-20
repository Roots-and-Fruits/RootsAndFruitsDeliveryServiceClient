import { useEffect, useState } from "react";
import { Button, CountProduct, Header, ProgressBar } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import { mainSectionStyle, totalPriceStyle } from "./SelectProduct.style";
import { useFetchProductList } from "@apis/domains/service/useFetchProductList";
import { useAtom } from "jotai";
import { categoryAtom, productListAtom } from "@stores";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { ProductList } from "src/stores/productList";
import { RecipientInfo } from "src/stores/orderPostData";
import { getTwoDaysLaterDate } from "@utils";

const SelectProduct = ({ onNext }: StepProps) => {
  const [category] = useAtom(categoryAtom);

  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();
  const { data: productList, isLoading } = useFetchProductList();
  const [productListState, setProductListState] = useAtom(productListAtom);
  const [displayedProductList, setDisplayedProductList] = useState<ProductList>(
    []
  );

  const calculateTotalPrice = (products: ProductList, order: RecipientInfo) => {
    console.log("RecipientInfo", order);

    return (order.productInfo || []).reduce((total, orderProduct) => {
      const product = products.find(
        (p) => p.productId === orderProduct.productId
      );

      if (product) {
        total += product.productPrice * orderProduct.productCount;
      }

      return total;
    }, 0);
  };

  const totalPrice = calculateTotalPrice(
    displayedProductList,
    orderPostDataState.recipientInfo[currentRecipientIndex] ?? {}
  );

  useEffect(() => {
    if (productList) {
      setProductListState(productList);
    }
  }, [productList, setProductListState]);

  useEffect(() => {
    if (productListState) {
      const listToSet =
        category === "experience"
          ? productListState.trialSailedProductList
          : productListState.sailedproductList;
      setDisplayedProductList(listToSet);
    }
  }, [productListState, category]);

  useEffect(() => {
    const currentProductInfo =
      orderPostDataState.recipientInfo[currentRecipientIndex]?.productInfo;
    if (
      displayedProductList &&
      displayedProductList.length > 0 &&
      (!currentProductInfo || currentProductInfo.length === 0)
    ) {
      const initialProductInfo = displayedProductList.map((product) => ({
        productId: product.productId,
        productName: product.productName,
        productCount: 0,
      }));

      handleRecipientInputChange(
        initialProductInfo,
        "productInfo",
        currentRecipientIndex
      );
    }
  }, [currentRecipientIndex, displayedProductList]);

  const handleCountChange = (productIndex: number, newCount: number) => {
    const currentProductInfo =
      orderPostDataState.recipientInfo[currentRecipientIndex]?.productInfo ||
      [];
    const updatedProductInfo = [...currentProductInfo];

    if (productList) {
      const product = displayedProductList[productIndex];

      if (product) {
        updatedProductInfo[productIndex] = {
          productId: product.productId,
          productName: product.productName,
          productCount: newCount,
        };

        handleRecipientInputChange(
          updatedProductInfo,
          "productInfo",
          currentRecipientIndex
        );
      }
    }
  };

  const handleNextClick = () => {
    if (category === "experience") {
      handleRecipientInputChange(
        getTwoDaysLaterDate(),
        "deliveryDate",
        currentRecipientIndex
      );
    }

    onNext();
  };

  if (isLoading || productList === undefined) {
    return <div>Loading...</div>;
  }

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
          {displayedProductList.map((product, i) => {
            const productCount =
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.productInfo?.[i]?.productCount ?? 0;
            return (
              <CountProduct
                key={i}
                productName={`${
                  product.productName
                } - ${product.productPrice.toLocaleString()}원`}
                count={productCount}
                onCountChange={(newCount) => handleCountChange(i, newCount)}
              />
            );
          })}
        </section>
        <footer css={buttonSectionStyle}>
          <h3
            css={totalPriceStyle}
          >{`총 ${totalPrice.toLocaleString()} 원`}</h3>
          <Button
            variant="fill"
            onClick={handleNextClick}
            disabled={totalPrice === 0}
          >
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default SelectProduct;

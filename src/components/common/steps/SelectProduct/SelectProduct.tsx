import { useEffect, useState } from "react";
import { Button, CountProduct } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  coloredTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import {
  discountPriceStyle,
  mainSectionStyle,
  priceWrapperStyle,
  totalPriceStyle,
} from "./SelectProduct.style";
import { useFetchProductList } from "@apis/domains/service/useFetchProductList";
import { useAtom } from "jotai";
import { categoryAtom, productListAtom } from "@stores";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { ProductList } from "src/stores/productList";
import { getTwoDaysLaterDate } from "@utils";
import {
  BUNDLE_KEYWORDS,
  PRODUCT_BUNDLE_DISCOUNT_ID,
  TRIAL_BUNDLE_DISCOUNT_ID,
} from "@constants";
import { ProductInfo } from "src/stores/orderPostData";

const getTotalSum = (productInfo: ProductInfo[]) => {
  return productInfo.reduce((sum, product) => {
    return sum + product.productCount * product.productPrice;
  }, 0);
};

const getiscountCount = (bundleProductCount: number) => {
  return Math.floor(bundleProductCount / 2);
};

const SelectProduct = ({ onNext }: StepProps) => {
  const [category] = useAtom(categoryAtom);

  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
    handleChangeOrderPrice,
  } = useOrderPostDataChange();
  const { data: productList, isLoading } = useFetchProductList();
  const [productListState, setProductListState] = useAtom(productListAtom);
  const [displayedProductList, setDisplayedProductList] = useState<ProductList>(
    []
  );

  const [discountPrice, setDiscountPrice] = useState(0);
  const [orderPrice, setOrderPrice] = useState(
    orderPostDataState.recipientInfo[currentRecipientIndex]?.orderPrice ?? 0
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

      const currentrecipientInfo =
        orderPostDataState.recipientInfo[currentRecipientIndex];

      if (currentrecipientInfo && currentrecipientInfo?.productInfo) {
        const totalSum = getTotalSum(currentrecipientInfo?.productInfo);
        setOrderPrice(totalSum);
      }

      if (
        currentrecipientInfo &&
        currentrecipientInfo?.bundleProductCount > 0
      ) {
        const discountCount = getiscountCount(
          currentrecipientInfo.bundleProductCount
        );
        setDiscountPrice(discountCount * 3000);
      }
    }
  }, [
    productListState,
    category,
    orderPostDataState.recipientInfo,
    currentRecipientIndex,
  ]);

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
        productPrice: product.productPrice,
      }));

      handleRecipientInputChange(
        initialProductInfo,
        "productInfo",
        currentRecipientIndex
      );
    }
  }, [
    currentRecipientIndex,
    displayedProductList,
    handleRecipientInputChange,
    orderPostDataState.recipientInfo,
  ]);

  const handleCountChange = (
    productIndex: number,
    type: "increase" | "decrease"
  ) => {
    const currentRecipient =
      orderPostDataState.recipientInfo[currentRecipientIndex];
    const currentProductInfo = currentRecipient?.productInfo || [];
    const updatedProductInfo = [...currentProductInfo];

    if (productList) {
      const product = displayedProductList[productIndex];
      const currentProductCount = currentProductInfo[productIndex].productCount;

      if (product) {
        updatedProductInfo[productIndex] = {
          productId: product.productId,
          productName: product.productName,
          productCount:
            type === "increase"
              ? currentProductCount + 1
              : currentProductCount - 1,
          productPrice: product.productPrice,
        };

        const isBundleProduct = BUNDLE_KEYWORDS.some((keyword) =>
          product.productName.toLowerCase().includes(keyword)
        );

        if (isBundleProduct) {
          orderPostDataState.recipientInfo[
            currentRecipientIndex
          ].bundleProductCount =
            type === "increase"
              ? (currentRecipient.bundleProductCount || 0) + 1
              : (currentRecipient.bundleProductCount || 0) - 1;
        }
        const bundleDiscoutCount = getiscountCount(
          currentRecipient.bundleProductCount || 0
        );

        updatedProductInfo.forEach((product) => {
          if (
            product.productId === PRODUCT_BUNDLE_DISCOUNT_ID ||
            product.productId === TRIAL_BUNDLE_DISCOUNT_ID
          ) {
            product.productCount = bundleDiscoutCount;
          }
        });
        setDiscountPrice(bundleDiscoutCount * 3000);

        const totalSum = getTotalSum(updatedProductInfo);

        handleRecipientInputChange(
          updatedProductInfo,
          "productInfo",
          currentRecipientIndex
        );

        handleChangeOrderPrice(totalSum, currentRecipientIndex);
        setOrderPrice(totalSum);
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
    <div css={layoutStyle}>
      <section css={sectionStyle}>
        <div css={textStyle}>
          보내실 상품의
          <br />
          <span css={coloredTextStyle(category)}>수량</span>을 선택해주세요
        </div>
      </section>
      <section css={mainSectionStyle}>
        {displayedProductList.map((product, i) => {
          const productCount =
            orderPostDataState.recipientInfo[currentRecipientIndex]
              ?.productInfo?.[i]?.productCount ?? 0;

          const isProduct =
            product.productId !== PRODUCT_BUNDLE_DISCOUNT_ID &&
            product.productId !== TRIAL_BUNDLE_DISCOUNT_ID;

          return isProduct ? (
            <CountProduct
              key={i}
              productName={`${
                product.productName
              } - ${product.productPrice.toLocaleString()}원`}
              count={productCount}
              onCountChange={(type: "increase" | "decrease") =>
                handleCountChange(i, type)
              }
            />
          ) : null;
        })}
      </section>
      <footer css={buttonSectionStyle}>
        <div css={priceWrapperStyle}>
          {discountPrice > 0 && (
            <p
              css={discountPriceStyle}
            >{`묶음 배송 할인: ${discountPrice.toLocaleString()} 원`}</p>
          )}
          <h3 css={totalPriceStyle}>
            {`총 ${orderPrice.toLocaleString()} 원`}
          </h3>
        </div>
        <Button
          variant="fill"
          onClick={handleNextClick}
          disabled={orderPrice === 0}
        >
          다음
        </Button>
      </footer>
    </div>
  );
};

export default SelectProduct;

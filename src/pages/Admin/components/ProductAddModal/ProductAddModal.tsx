import { Button, Input, RadioInput } from "@components";
import {
  modalContainer,
  modalTitle,
  radioWrapper,
  subTitle,
  wrapperStyle,
} from "./ProductAddModal.style";
import { useState } from "react";
import { usePostProduct } from "@apis/domains/admin/usePostProduct";
import { CategoryType } from "@types";

interface ModalProps {
  onClose: () => void;
  category: CategoryType;
}

const ProductAddModal = ({ onClose, category }: ModalProps) => {
  const [isTrial, setIsTrial] = useState(category === "experience");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);

  const { mutate } = usePostProduct();
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTrial(e.target.value === "trial");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력 값에서 숫자만 추출
    const numericValue = e.target.value.replace(/[^\d]/g, "");
    setProductPrice(Number(numericValue));
  };

  // 금액 형식으로 포맷팅 (콤마 추가)
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleButtonClick = () => {
    mutate({ isTrial, productName, productPrice });
    onClose();
  };

  return (
    <article css={modalContainer}>
      <h1 css={modalTitle}>상품 추가하기</h1>

      <div css={wrapperStyle}>
        <h3 css={subTitle}>상품 종류</h3>
        <section css={radioWrapper}>
          <RadioInput
            name="product"
            value="trial"
            checked={isTrial}
            onChange={handleOptionChange}
            label="체험 상품"
          />
          <RadioInput
            name="product"
            value="sales"
            checked={!isTrial}
            onChange={handleOptionChange}
            label="판매 상품"
          />
        </section>
      </div>

      <div>
        <h3 css={subTitle}>상품 이름</h3>
        <Input type="text" value={productName} onChange={handleNameChange} />
      </div>

      <div>
        <h3 css={subTitle}>상품 가격</h3>
        <Input
          type="text"
          value={formatPrice(productPrice)}
          onChange={handlePriceChange}
        />
      </div>

      <Button variant="fill" onClick={handleButtonClick}>
        추가하기
      </Button>
    </article>
  );
};

export default ProductAddModal;

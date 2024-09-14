import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const SelectProduct = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="상품 선택" />
      <ProgressBar progress={57.12} />
    </div>
  );
};

export default SelectProduct;

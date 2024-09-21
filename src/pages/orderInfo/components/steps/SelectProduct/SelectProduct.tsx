import { Header, ProgressBar } from "@components";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import { StepProps } from "@types";

const SelectProduct = ({ onNext }: StepProps) => {
  const { orderPostDataState } = useOrderPostDataChange();
  console.log(orderPostDataState);
  return (
    <div onClick={onNext}>
      <Header text="상품 선택" />
      <ProgressBar progress={57.12} />
    </div>
  );
};

export default SelectProduct;

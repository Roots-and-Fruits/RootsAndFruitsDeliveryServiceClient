import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const SelectDeliveryDate = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="희망 배송일자 선택" />
      <ProgressBar progress={71.4} />
    </div>
  );
};

export default SelectDeliveryDate;

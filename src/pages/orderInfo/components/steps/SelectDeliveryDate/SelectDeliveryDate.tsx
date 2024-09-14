import { StepProps } from "@types";

const SelectDeliveryDate = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>SelectDeliveryDate</div>;
};

export default SelectDeliveryDate;

import { StepProps } from "@types";

const SelectProduct = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>SelectProduct</div>;
};

export default SelectProduct;

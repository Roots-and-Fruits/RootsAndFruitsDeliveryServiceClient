import { StepProps } from "@types";

const CheckInfo = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>CheckInfo</div>;
};

export default CheckInfo;

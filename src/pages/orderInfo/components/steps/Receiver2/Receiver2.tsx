import { StepProps } from "@types";

const Receiver2 = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>Receiver2</div>;
};

export default Receiver2;

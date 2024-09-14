import { StepProps } from "@types";

const Receiver1 = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>Receiver1</div>;
};

export default Receiver1;

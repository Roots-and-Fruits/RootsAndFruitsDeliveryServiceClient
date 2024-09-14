import { StepProps } from "@types";

const Sender = ({ onNext }: StepProps) => {
  return <div onClick={onNext}>Sender</div>;
};

export default Sender;

import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const Sender = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="보내는 분" />
      <ProgressBar progress={14.28} />
    </div>
  );
};

export default Sender;

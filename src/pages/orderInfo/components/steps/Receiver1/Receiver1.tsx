import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const Receiver1 = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="받는 분" />
      <ProgressBar progress={28.56} />
    </div>
  );
};

export default Receiver1;

import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const Receiver2 = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="받는 분 정보 입력" />
      <ProgressBar progress={42.84} />
    </div>
  );
};

export default Receiver2;

import { Header, ProgressBar } from "@components";
import { StepProps } from "@types";

const CheckInfo = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="입력 정보 확인" />
      <ProgressBar progress={85.68} />
    </div>
  );
};

export default CheckInfo;

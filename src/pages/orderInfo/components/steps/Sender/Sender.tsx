import { StepProps } from "@types";
import Header from "src/components/common/Header/Header";
import ProgressBar from "src/components/common/ProgressBar/ProgressBar";

const Sender = ({ onNext }: StepProps) => {
  return (
    <div onClick={onNext}>
      <Header text="보내는분" />
      <ProgressBar progress={14.28}/>
    </div>
  );
};

export default Sender;

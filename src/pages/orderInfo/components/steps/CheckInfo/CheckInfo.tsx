import { Header, ProgressBar } from "@components";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import { StepProps } from "@types";

const CheckInfo = ({ onNext }: StepProps) => {
  const { orderPostDataState } = useOrderPostDataChange();
  console.log(orderPostDataState);
  return (
    <div onClick={onNext}>
      <Header text="입력 정보 확인" />
      <ProgressBar progress={85.68} />
    </div>
  );
};

export default CheckInfo;

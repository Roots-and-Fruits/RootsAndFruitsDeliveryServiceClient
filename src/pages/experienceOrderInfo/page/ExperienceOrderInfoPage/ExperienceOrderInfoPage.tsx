import { useFunnel } from "@hooks";
import ExperienceOrderInfo from "@pages/experienceOrderInfo/components/ExperienceOrderInfo/ExperienceOrderInfo";
import { useParams } from "react-router-dom";

const steps = [
  "sender",
  "receiver1",
  "receiver2",
  "select-product",
  "check-info",
  "complete",
];

const ExperienceOrderInfoPage = () => {
  const { step } = useParams<{ step: string }>();
  const { Funnel, Step, nextStep } = useFunnel(
    step || steps[0],
    "experience/order-info"
  );
  return (
    <>
      <ExperienceOrderInfo
        steps={steps}
        nextClickHandler={nextStep}
        Funnel={Funnel}
        Step={Step}
      />
    </>
  );
};

export default ExperienceOrderInfoPage;

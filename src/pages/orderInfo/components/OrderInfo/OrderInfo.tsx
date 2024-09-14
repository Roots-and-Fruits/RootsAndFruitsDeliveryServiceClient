import React from "react";
import { FunnelProps, StepProps } from "src/hooks/useFunnel";
import Sender from "../steps/Sender/Sender";
import Receiver1 from "../steps/Receiver1/Receiver1";
import Receiver2 from "../steps/Receiver2/Receiver2";
import SelectProduct from "../steps/SelectProduct/SelectProduct";
import SelectDeliveryDate from "../steps/SelectDeliveryDate/SelectDeliveryDate";
import CheckInfo from "../steps/CheckInfo/CheckInfo";
import Complete from "../steps/Complete/Complete";

export interface OrderInfoProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const OrderInfo = ({
  steps,
  nextClickHandler,
  Funnel,
  Step,
}: OrderInfoProps) => {
  return (
    <Funnel>
      <Step name={steps[0]}>
        <Sender onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <Receiver1 onNext={() => nextClickHandler(steps[2])} />
      </Step>
      <Step name={steps[2]}>
        <Receiver2 onNext={() => nextClickHandler(steps[3])} />
      </Step>
      <Step name={steps[3]}>
        <SelectProduct onNext={() => nextClickHandler(steps[4])} />
      </Step>
      <Step name={steps[4]}>
        <SelectDeliveryDate onNext={() => nextClickHandler(steps[5])} />
      </Step>
      <Step name={steps[5]}>
        <CheckInfo onNext={() => nextClickHandler(steps[6])} />
      </Step>
      <Step name={steps[6]}>
        <Complete />
      </Step>
    </Funnel>
  );
};

export default OrderInfo;

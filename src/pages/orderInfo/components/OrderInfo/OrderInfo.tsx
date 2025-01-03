import {
  CheckInfo,
  Complete,
  Header,
  ProgressBar,
  Receiver1,
  Receiver2,
  SelectDeliveryDate,
  SelectProduct,
  Sender,
} from "@components";
import React from "react";
import { FunnelProps, StepProps } from "src/hooks/useFunnel";

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
        <Header />
        <ProgressBar progress={14} />
        <Sender onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <Header />
        <ProgressBar progress={28} />
        <Receiver1 onNext={() => nextClickHandler(steps[2])} />
      </Step>
      <Step name={steps[2]}>
        <Header />
        <ProgressBar progress={44} />
        <Receiver2 onNext={() => nextClickHandler(steps[3])} />
      </Step>
      <Step name={steps[3]}>
        <Header />
        <ProgressBar progress={58} />
        <SelectProduct onNext={() => nextClickHandler(steps[4])} />
      </Step>
      <Step name={steps[4]}>
        <Header />
        <ProgressBar progress={72} />
        <SelectDeliveryDate onNext={() => nextClickHandler(steps[5])} />
      </Step>
      <Step name={steps[5]}>
        <Header />
        <ProgressBar progress={86} />
        <CheckInfo onNext={() => nextClickHandler(steps[6])} />
      </Step>
      <Step name={steps[6]}>
        <Header />
        <ProgressBar progress={100} />
        <Complete />
      </Step>
    </Funnel>
  );
};

export default OrderInfo;

import React from "react";
import {
  CheckInfo,
  Complete,
  Header,
  ProgressBar,
  Receiver1,
  Receiver2,
  SelectProduct,
  Sender,
} from "@components";
import { FunnelProps, StepProps } from "src/hooks/useFunnel";

export interface ExperienceOrderInfoPros {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const ExperienceOrderInfo = ({
  steps,
  nextClickHandler,
  Funnel,
  Step,
}: ExperienceOrderInfoPros) => {
  return (
    <Funnel>
      <Step name={steps[0]}>
        <Header />
        <ProgressBar progress={18} />
        <Sender onNext={() => nextClickHandler(steps[1])} />
      </Step>
      <Step name={steps[1]}>
        <Header />
        <ProgressBar progress={34} />
        <Receiver1 onNext={() => nextClickHandler(steps[2])} />
      </Step>
      <Step name={steps[2]}>
        <Header />
        <ProgressBar progress={50} />
        <Receiver2 onNext={() => nextClickHandler(steps[3])} />
      </Step>
      <Step name={steps[3]}>
        <Header />
        <ProgressBar progress={68} />
        <SelectProduct onNext={() => nextClickHandler(steps[4])} />
      </Step>
      <Step name={steps[4]}>
        <Header />
        <ProgressBar progress={86} />
        <CheckInfo onNext={() => nextClickHandler(steps[5])} />
      </Step>
      <Step name={steps[5]}>
        <Header />
        <ProgressBar progress={100} />
        <Complete />
      </Step>
    </Funnel>
  );
};

export default ExperienceOrderInfo;

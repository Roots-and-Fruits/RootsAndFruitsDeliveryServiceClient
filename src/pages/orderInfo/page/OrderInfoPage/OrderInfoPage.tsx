import { useFunnel } from "@hooks";
import OrderInfo from "@pages/orderInfo/components/OrderInfo/OrderInfo";
import { useParams } from "react-router-dom";

const steps = [
  "sender",
  "receiver1",
  "receiver2",
  "select-product",
  "select-delivery-date",
  "check-info",
  "complete",
];

const OrderInfoPage = () => {
  const { step } = useParams<{ step: string }>();
  const { Funnel, Step, nextStep } = useFunnel(step || steps[0], "order-info");
  return (
    <>
      <OrderInfo
        steps={steps}
        nextClickHandler={nextStep}
        Funnel={Funnel}
        Step={Step}
      />
    </>
  );
};

export default OrderInfoPage;

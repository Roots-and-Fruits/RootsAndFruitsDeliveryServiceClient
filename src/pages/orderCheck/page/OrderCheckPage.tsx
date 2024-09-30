import { orderCheckLayout } from "./OrderCheckPage.style";
import {
  OrderTrackingSection,
  OrderNumberSearchSection,
  OrderInfoSection,
} from "../components";

const OrderCheckPage = () => {
  return (
    <div css={orderCheckLayout}>
      <OrderTrackingSection />
      <OrderNumberSearchSection />
      <OrderInfoSection />
    </div>
  );
};

export default OrderCheckPage;

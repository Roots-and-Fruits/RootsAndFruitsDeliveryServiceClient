import { iconStyle, orderCheckLayout, refreshButton } from "./OrderCheckPage.style";
import {
  OrderTrackingSection,
  OrderNumberSearchSection,
  OrderInfoSection,
} from "../components";
import { IcRefresh } from "@svg";

const OrderCheckPage = () => {
  return (
    <div css={orderCheckLayout}>
      <OrderTrackingSection />
      <OrderNumberSearchSection />
      <OrderInfoSection />
      <div css={refreshButton}>
        <IcRefresh  css={iconStyle}/>
      </div>
    </div>
  );
};

export default OrderCheckPage;

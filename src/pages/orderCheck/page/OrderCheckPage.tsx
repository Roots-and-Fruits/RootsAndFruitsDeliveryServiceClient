import {
  iconStyle,
  orderCheckLayout,
  refreshButton,
} from "./OrderCheckPage.style";
import { OrderNumberSearchSection, OrderInfoSection } from "../components";
import { IcRefresh } from "@svg";
import { useFetchRecentOrderNumber } from "@apis/domains/orderCheck/useFetchRecentOrderNumber";

const OrderCheckPage = () => {
  const { data: recentOrderList, refetch } = useFetchRecentOrderNumber();

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div css={orderCheckLayout}>
      <OrderNumberSearchSection recentOrderList={recentOrderList} />
      <OrderInfoSection />
      <div css={refreshButton} onClick={handleRefresh}>
        <IcRefresh css={iconStyle} />
      </div>
    </div>
  );
};

export default OrderCheckPage;

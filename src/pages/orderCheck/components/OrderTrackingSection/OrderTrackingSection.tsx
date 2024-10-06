import { useFetchRecentOrderNumber } from "@apis/domains/orderCheck/useFetchRecentOrderNumber";
import RecentOrderCard from "../RecentOrderCard/RecentOrderCard";
import { section1Container } from "./OrderTrackingSection.style";
const OrderTrackingSection = () => {
  const { data: recentOrderList } = useFetchRecentOrderNumber();
  return (
    <section css={section1Container}>
      {recentOrderList?.map((order, i) => (
        <RecentOrderCard
          key={i}
          orderNumber={order.orderNumber}
          senderName={order.senderName}
        />
      ))}
    </section>
  );
};

export default OrderTrackingSection;

import RecentOrderCard from "../RecentOrderCard/RecentOrderCard";
import { section1Container } from "./OrderTrackingSection.style";
const recentOrderList = [
  { orderNumber: 1029, senderName: "박채연" },
  { orderNumber: 4569, senderName: "유태승" },
  { orderNumber: 1074, senderName: "유태승" },
  { orderNumber: 1074, senderName: "유태승" },
  { orderNumber: 1074, senderName: "유태승" },
  { orderNumber: 1074, senderName: "유태승" },
];
const OrderTrackingSection = () => {
  return (
    <section css={section1Container}>
      {recentOrderList.map((order, i) => (
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

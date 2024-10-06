import DialButton from "../DialButton/DialButton";
import {
  dialButtonWrapper,
  orderNumberSpan,
  orderNumberStyle,
  section1Container,
  section2Container,
} from "./OrderNumberSearchSection.style";
import { useFetchOrderInfoWithOrderNumber } from "@apis/domains/orderCheck/useFetchOrderInfoWithOrderNumber";
import { useAtom } from "jotai";
import {
  orderInfoAtom,
  orderNumberAtom,
  previousOrderNumberAtom,
} from "@stores";
import { RecentOrderType } from "@types";
import RecentOrderCard from "../RecentOrderCard/RecentOrderCard";
import { useEffect, useState } from "react";

interface OrderTrackingSectionProps {
  recentOrderList: RecentOrderType[] | null | undefined;
}

const OrderNumberSearchSection = ({
  recentOrderList,
}: OrderTrackingSectionProps) => {
  const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);
  const [, setOrderInfo] = useAtom(orderInfoAtom);
  const [, setPreviousOrderNumber] = useAtom(previousOrderNumberAtom);
  const [triggerSearch, setTriggerSearch] = useState(false);
  const { refetch } = useFetchOrderInfoWithOrderNumber(Number(orderNumber));

  useEffect(() => {
    if (triggerSearch) {
      handleSearch();
      setTriggerSearch(false);
    }
  }, [orderNumber, triggerSearch]);

  const handleButtonClick = (value: string) => {
    if (orderNumber.length < 4) {
      setOrderNumber((prev) => prev + value);
    }
  };

  const handleDelete = () => {
    setOrderNumber((prev) => prev.slice(0, -1));
  };

  const handleSearch = async () => {
    const result = await refetch();
    if (result.data === null) {
      alert("주문번호에 대한 주문내역이 존재하지 않습니다.");
    }
    setOrderInfo(result?.data ?? null);
    setPreviousOrderNumber(orderNumber);
    setOrderNumber("");
  };

  const handleRecentOrderClick = (orderNumber: string) => {
    setOrderNumber(orderNumber);
    setTriggerSearch(true);
  };

  return (
    <>
      <section css={section1Container}>
        {recentOrderList?.map((order, i) => (
          <RecentOrderCard
            key={i}
            orderNumber={order.orderNumber}
            senderName={order.senderName}
            onClick={() => handleRecentOrderClick(order.orderNumber.toString())}
          />
        ))}
      </section>
      <section css={section2Container}>
        <div css={orderNumberStyle}>
          <span css={orderNumberSpan}>{orderNumber}</span>
        </div>
        <div css={dialButtonWrapper}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "<-", "0", "조회"].map(
            (item, i) => (
              <DialButton
                key={i}
                onClick={() => {
                  if (item === "<-") handleDelete();
                  else if (item === "조회") handleSearch();
                  else handleButtonClick(item);
                }}
                index={i}
              >
                {item}
              </DialButton>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default OrderNumberSearchSection;

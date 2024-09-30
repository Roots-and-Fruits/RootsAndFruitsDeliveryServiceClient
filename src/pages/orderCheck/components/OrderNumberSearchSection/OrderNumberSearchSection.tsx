import DialButton from "../DialButton/DialButton";
import {
  dialButtonWrapper,
  orderNumberSpan,
  orderNumberStyle,
  section2Container,
} from "./OrderNumberSearchSection.style";
import { useFetchOrderInfoWithOrderNumber } from "@apis/domains/orderCheck/useFetchOrderInfoWithOrderNumber";
import { useAtom } from "jotai";
import {
  orderInfoAtom,
  orderNumberAtom,
  previousOrderNumberAtom,
} from "@stores";

const OrderNumberSearchSection = () => {
  const [orderNumber, setOrderNumber] = useAtom(orderNumberAtom);
  const [, setOrderInfo] = useAtom(orderInfoAtom);
  const [, setPreviousOrderNumber] = useAtom(previousOrderNumberAtom);
  const { refetch } = useFetchOrderInfoWithOrderNumber(Number(orderNumber));
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
  return (
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
  );
};

export default OrderNumberSearchSection;

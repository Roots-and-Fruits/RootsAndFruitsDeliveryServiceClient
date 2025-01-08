import { Filter, OrderTable } from "@pages/Admin/components";
import { pageLayout, sectionStyle, sectionTitle } from "./OrderCheck.style";
import { useRef, useState } from "react";
import { Dayjs } from "dayjs";
import { useFetchOrders } from "@apis/domains/admin/useFetchOrders";

interface Option {
  value: string;
  label: string;
}

const OrderCheck = () => {
  const orderReceivedDateRef = useRef<Dayjs | null>(null);
  const deliveryDateRef = useRef<Dayjs | null>(null);
  const productRef = useRef<Option | null>(null);
  const statusRef = useRef<Option | null>(null);

  const [query, setQuery] = useState({
    orderReceivedDate: "",
    deliveryDate: "",
    productName: "",
    deliveryStatus: "",
    nextCursor: "",
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchOrders(query);

  const orders = data ?? [];

  const handleSearchClick = () => {
    const newQuery = {
      orderReceivedDate:
        orderReceivedDateRef.current?.format("YYYY-MM-DD") || "",
      deliveryDate: deliveryDateRef.current?.format("YYYY-MM-DD") || "",
      productName: productRef.current?.value || "",
      deliveryStatus: statusRef.current?.value || "",
      nextCursor: "",
    };
    setQuery(newQuery);
  };

  const handleResetClick = () => {
    orderReceivedDateRef.current = null;
    deliveryDateRef.current = null;
    statusRef.current = null;
    productRef.current = null;

    setQuery({
      orderReceivedDate: "",
      deliveryDate: "",
      productName: "",
      deliveryStatus: "",
      nextCursor: "",
    });
  };

  return (
    <div css={pageLayout}>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>검색필터</h3>
        <Filter
          orderReceivedDateRef={orderReceivedDateRef}
          deliveryDateRef={deliveryDateRef}
          productRef={productRef}
          statusRef={statusRef}
          handleSearchClick={handleSearchClick}
          handleResetClick={handleResetClick}
        />
      </section>
      <OrderTable orders={orders} />
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "로딩 중"
          : hasNextPage
          ? "더 로드하기"
          : "더 로드할 것이 없음!"}
      </button>
    </div>
  );
};

export default OrderCheck;

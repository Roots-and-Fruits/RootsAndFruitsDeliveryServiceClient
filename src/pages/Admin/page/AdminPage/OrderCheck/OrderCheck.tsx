import { Filter, OrderTable } from "@pages/Admin/components";
import {
  observerRefDiv,
  orderDataSpinner,
  pageLayout,
  sectionStyle,
  sectionTitle,
} from "./OrderCheck.style";
import { useRef, useState, useEffect, useCallback } from "react";
import { Dayjs } from "dayjs";
import { useFetchOrders } from "@apis/domains/admin/useFetchOrders";
import { ClipLoader } from "react-spinners";

interface Option {
  value: string;
  label: string;
}

const OrderCheck = () => {
  const orderNumberRef = useRef<string | null>(null);
  const senderNameRef = useRef<string | null>(null);
  const recipientNameRef = useRef<string | null>(null);
  const orderReceivedDateRef = useRef<Dayjs | null>(null);
  const deliveryDateRef = useRef<Dayjs | null>(null);
  const productRef = useRef<Option | null>(null);
  const statusRef = useRef<Option | null>(null);

  const [query, setQuery] = useState({
    orderNumber: "",
    senderName: "",
    recipientName: "",
    orderReceivedDate: "",
    deliveryDate: "",
    productName: "",
    deliveryStatus: "",
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchOrders(query);

  const orders = data ?? [];

  const observerRef = useRef<HTMLDivElement | null>(null);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onIntersect]);

  const handleSearchClick = () => {
    const newQuery = {
      orderNumber: orderNumberRef.current?.toString() || "",
      senderName: senderNameRef.current || "",
      recipientName: recipientNameRef.current || "",
      orderReceivedDate:
        orderReceivedDateRef.current?.format("YYYY-MM-DD") || "",
      deliveryDate: deliveryDateRef.current?.format("YYYY-MM-DD") || "",
      productName: productRef.current?.value || "",
      deliveryStatus: statusRef.current?.value || "",
    };
    setQuery(newQuery);
  };

  const handleResetClick = () => {
    orderNumberRef.current = null;
    senderNameRef.current = null;
    recipientNameRef.current = null;
    orderReceivedDateRef.current = null;
    deliveryDateRef.current = null;
    statusRef.current = null;
    productRef.current = null;

    setQuery({
      orderNumber: "",
      senderName: "",
      recipientName: "",
      orderReceivedDate: "",
      deliveryDate: "",
      productName: "",
      deliveryStatus: "",
    });
  };

  return (
    <div css={pageLayout}>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>검색필터</h3>
        <Filter
          filterRef={{
            orderNumberRef,
            senderNameRef,
            recipientNameRef,
            orderReceivedDateRef,
            deliveryDateRef,
            productRef,
            statusRef,
          }}
          handleSearchClick={handleSearchClick}
          handleResetClick={handleResetClick}
        />
      </section>
      <OrderTable orders={orders} />
      <div ref={observerRef} css={observerRefDiv} />
      {hasNextPage && !isFetchingNextPage && (
        <ClipLoader
          color={"#EC6732"}
          size={50}
          aria-label="Loading Spinner"
          css={orderDataSpinner}
        />
      )}
    </div>
  );
};

export default OrderCheck;

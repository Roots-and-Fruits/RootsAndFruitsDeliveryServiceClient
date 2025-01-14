import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiResponseType, ErrorResponse, OrderData } from "@types";

interface queryType {
  orderReceivedDate: string;
  deliveryDate: string;
  productName: string;
  deliveryStatus: string;
}

const buildQuery = (query: queryType): string => {
  const queryString = Object.entries(query)
    .filter(([, value]) => value && value.trim() !== "") // 빈 값 또는 공백 문자열 제거
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
    ) // 쿼리 파라미터를 인코딩
    .join("&");

  return queryString ? `${queryString}` : "";
};

const getOrders = async (
  query: queryType,
  pageParam?: string
): Promise<OrderData> => {
  try {
    const extendedQuery =
      pageParam === "-1" ? query : { ...query, cursorOrderId: pageParam };
    const response = await get<ApiResponseType<OrderData>>(
      `api/v1/orders?${buildQuery(extendedQuery)}`
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useFetchOrders = (query: queryType) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.ORDER_LIST, query],
    queryFn: ({ pageParam = null }) => getOrders(query, pageParam?.toString()),
    getNextPageParam: (lastPage) => {
      return lastPage?.nextCursor === null ? undefined : lastPage?.nextCursor;
    },
    initialPageParam: -1, // 초기 페이지 파라미터 설정
    select: (data) => (data.pages ?? []).flatMap((page) => page?.orders),
    staleTime: 1000 * 60,
  });
};

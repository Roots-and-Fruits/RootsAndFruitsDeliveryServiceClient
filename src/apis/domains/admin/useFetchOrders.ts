import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, ErrorResponse, Order, OrderData } from "@types";

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

const getOrders = async (query: queryType): Promise<Order[] | null> => {
  try {
    const response = await get<ApiResponseType<OrderData>>(
      `api/v1/order?${buildQuery(query)}`
    );
    return response.data.data.orderList;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useFetchOrders = (query: queryType) => {
  return useQuery({
    queryKey: [QUERY_KEY.ORDER_LIST, query],
    queryFn: () => getOrders(query),
  });
};

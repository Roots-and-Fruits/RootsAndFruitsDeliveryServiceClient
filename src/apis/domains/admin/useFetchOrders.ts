import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, ErrorResponse } from "@types";

interface queryType {
  orderReceivedDate: string;
  deliveryDate: string;
  productName: string;
  deliveryStatus: string;
}

interface Order {
  deliveryId: number;
  orderNumber: number;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientAddressDetail: string;
  recipientPostCode: string;
  productList: string[]; // 제품 리스트는 문자열 배열
  productTotalCount: number;
  deliveryStatus: string;
  orderReceivedDate: string; // 날짜를 문자열로 표현
  deliveryDate: string; // 날짜를 문자열로 표현
}

// 전체 데이터 구조를 위한 타입 정의
interface OrderData {
  orderList: Order[];
}

const buildQuery = (query: queryType): string => {
  const queryString = Object.entries(query)
    .filter(([, value]) => value && value.trim() !== "") // 빈 값 또는 공백 문자열 제거
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
    ) // 쿼리 파라미터를 인코딩
    .join("&");

  return queryString ? `?${queryString}` : "";
};

const getOrders = async (query: queryType): Promise<OrderData | null> => {
  try {
    const response = await get<ApiResponseType<OrderData>>(
      `api/v1/order?${buildQuery(query)}`
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useFetchOrders = (query: queryType) => {
  return useQuery({
    queryKey: [QUERY_KEY.SAILED_PRODUCT, query],
    queryFn: () => getOrders(query),
  });
};

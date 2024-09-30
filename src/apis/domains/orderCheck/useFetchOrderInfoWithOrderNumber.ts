import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, OrderInfoData } from "@types";

const getOrderInfo = async (
  orderNumber: number
): Promise<OrderInfoData | null> => {
  try {
    const response = await get<ApiResponseType<OrderInfoData>>(
      `api/v1/order/${orderNumber}`
    );
    console.log(response.data);
    return response.data.data;
  } catch {
    return null;
  }
};

export const useFetchOrderInfoWithOrderNumber = (orderNumber: number) => {
  return useQuery({
    queryKey: [QUERY_KEY.ORDER_INFO_WITH_ORDER_NUMBER],
    queryFn: () => getOrderInfo(orderNumber),
    enabled: false,
  });
};

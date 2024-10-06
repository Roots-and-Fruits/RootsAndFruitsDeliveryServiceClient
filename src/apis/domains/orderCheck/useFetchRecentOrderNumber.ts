import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, RecentOrderType } from "@types";

const getRecentOrderNumber = async (): Promise<RecentOrderType[] | null> => {
  try {
    const response = await get<ApiResponseType<RecentOrderType[]>>(
      "api/v1/order/recent"
    );
    return response.data.data;
  } catch {
    return null;
  }
};

export const useFetchRecentOrderNumber = () => {
  return useQuery({
    queryKey: [QUERY_KEY.RECENT_ORDER_NUMBER],
    queryFn: () => getRecentOrderNumber(),
  });
};

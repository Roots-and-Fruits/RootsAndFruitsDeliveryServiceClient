import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@types";

const getDeliveryDate = async (): Promise<number | null> => {
  try {
    const response = await get<ApiResponseType<number>>("api/v1/delivery/max");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const useFetchDeliveryDate = () => {
  return useQuery({
    queryKey: [QUERY_KEY.DELIVERY_DATE_MAX],
    queryFn: () => getDeliveryDate(),
  });
};

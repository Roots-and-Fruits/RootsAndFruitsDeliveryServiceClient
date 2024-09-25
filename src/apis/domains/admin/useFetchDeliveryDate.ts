import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, ErrorResponse } from "@types";

const getDeliveryDate = async (): Promise<number | null> => {
  try {
    const response = await get<ApiResponseType<number>>("api/v1/delivery/max");
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useFetchDeliveryDate = () => {
  return useQuery({
    queryKey: [QUERY_KEY.DELIVERY_DATE],
    queryFn: () => getDeliveryDate(),
  });
};

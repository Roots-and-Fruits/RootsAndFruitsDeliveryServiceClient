import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, ErrorResponse } from "@types";
import { SailedProductList } from "@types";

const getSailedProduct = async (): Promise<SailedProductList | null> => {
  try {
    const response = await get<ApiResponseType<SailedProductList>>(
      "api/v1/product/sailed"
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useFetchSailedProduct = () => {
  return useQuery({
    queryKey: [QUERY_KEY.SAILED_PRODUCT],
    queryFn: () => getSailedProduct(),
  });
};

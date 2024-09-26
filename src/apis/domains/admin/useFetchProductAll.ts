import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, ProductListWithSailed } from "@types";

const getProductList = async (): Promise<ProductListWithSailed | null> => {
  try {
    const response = await get<ApiResponseType<ProductListWithSailed>>(
      "api/v1/product/all"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useFetchProductAll = () => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCT_LIST_ALL],
    queryFn: () => getProductList(),
  });
};

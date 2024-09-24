import { get } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType } from "@types";
import { ProductList } from "src/stores/productList";

const getProductList = async (): Promise<ProductList | null> => {
  try {
    const response = await get<ApiResponseType<ProductList>>(
      "api/v1/product/sailed"
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const useFetchProductList = () => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCT_LIST],
    queryFn: () => getProductList(),
  });
};

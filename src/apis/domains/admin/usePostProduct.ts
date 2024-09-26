import { post } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType, ProductAddType } from "@types";

const postProduct = async (
  productData: ProductAddType
): Promise<MutateResponseType> => {
  try {
    const response = await post<MutateResponseType>(
      `api/v1/product`,
      productData
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productData: ProductAddType) => postProduct(productData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST_ALL] });
    },
  });
};

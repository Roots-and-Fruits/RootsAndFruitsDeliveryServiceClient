import { del } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType } from "@types";

const deleteProduct = async (
  productIdList: number[]
): Promise<MutateResponseType> => {
  try {
    const response = await del<MutateResponseType>(`api/v1/product`, {
      data: productIdList,
    });
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productIdList: number[]) => deleteProduct(productIdList),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST_ALL] });
    },
  });
};

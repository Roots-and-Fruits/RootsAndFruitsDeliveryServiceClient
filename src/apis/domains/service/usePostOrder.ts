import { post } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, OrderNumberType } from "@types";
import { OrderPostDataType } from "src/stores/orderPostData";

const postOrder = async (
  orderPostState: OrderPostDataType
): Promise<number> => {
  try {
    const response = await post<OrderNumberType>(
      "api/v1/order",
      orderPostState
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderPostState: OrderPostDataType) =>
      postOrder(orderPostState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ORDER_POST] });
    },
  });
};

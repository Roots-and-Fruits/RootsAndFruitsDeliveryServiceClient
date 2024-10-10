import { adminPatch } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType } from "@types";

const patchDeliveryShipped = async (
  orderNumberList: number[]
): Promise<MutateResponseType> => {
  try {
    const response = await adminPatch<MutateResponseType>(
      `api/v1/delivery/shipped`,
      orderNumberList
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePatchDeliveryShipped = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderNumberList: number[]) =>
      patchDeliveryShipped(orderNumberList),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ORDER_LIST] });
    },
  });
};

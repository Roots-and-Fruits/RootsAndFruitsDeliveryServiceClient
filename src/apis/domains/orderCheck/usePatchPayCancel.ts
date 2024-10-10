import { adminPatch } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutateResponseType } from "@types";

const patchPayCancel = async (
  orderNumber: number
): Promise<MutateResponseType | null> => {
  try {
    const response = await adminPatch<MutateResponseType>(
      `api/v1/order/cancel/${orderNumber}`
    );
    return response.data;
  } catch {
    return null;
  }
};

export const usePatchPayCancel = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderNumber: number) => patchPayCancel(orderNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.RECENT_ORDER_NUMBER],
      });
    },
  });
};

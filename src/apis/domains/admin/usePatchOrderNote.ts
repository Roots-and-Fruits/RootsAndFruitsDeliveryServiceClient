import { adminPatch } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType } from "@types";

interface PatchOrderNote {
  orderId: number;
  note: string;
}

const patchOrderNote = async ({
  orderId,
  note,
}: PatchOrderNote): Promise<MutateResponseType> => {
  try {
    const response = await adminPatch<MutateResponseType>(`api/v1/order/note`, {
      orderId,
      note,
    });
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePatchOrderNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (date: PatchOrderNote) => patchOrderNote(date),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.ORDER_LIST] });
    },
  });
};

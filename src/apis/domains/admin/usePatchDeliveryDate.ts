import { adminPatch } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType } from "@types";

const patchDeliveryDate = async (date: string): Promise<MutateResponseType> => {
  try {
    const response = await adminPatch<MutateResponseType>(
      `api/v1/delivery/${date.toString()}`
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePatchDeliveryDate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (date: string) => patchDeliveryDate(date),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.DELIVERY_DATE] });
    },
  });
};

import { adminPatch } from "@apis/api";
import { QUERY_KEY } from "@apis/queryKeys/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorResponse, MutateResponseType } from "@types";

interface PatchProductSequence {
  productId: number;
  currentSequence: number;
  newSequence: number;
}

const patchProductSequence = async ({
  productId,
  currentSequence,
  newSequence,
}: PatchProductSequence): Promise<MutateResponseType> => {
  try {
    const response = await adminPatch<MutateResponseType>(
      `api/v1/product/sequence/${productId.toString()}?currentSequence=${currentSequence}&newSequence=${newSequence}`
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePatchSequence = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      productId,
      currentSequence,
      newSequence,
    }: PatchProductSequence) =>
      patchProductSequence({ productId, currentSequence, newSequence }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_LIST_ALL] });
    },
  });
};

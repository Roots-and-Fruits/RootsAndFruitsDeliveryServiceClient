import { patch } from "@apis/api";
import { useMutation } from "@tanstack/react-query";
import { MutateResponseType } from "@types";

const patchPayComplete = async (
  orderNumber: number
): Promise<MutateResponseType | null> => {
  try {
    const response = await patch<MutateResponseType>(
      `api/v1/order/pay/${orderNumber}`
    );
    return response.data;
  } catch {
    return null;
  }
};

export const usePatchPayComplete = () => {
  return useMutation({
    mutationFn: (orderNumber: number) => patchPayComplete(orderNumber),
    onSuccess: () => {},
  });
};

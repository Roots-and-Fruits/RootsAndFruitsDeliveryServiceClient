import { adminPatch } from "@apis/api";
import { useMutation } from "@tanstack/react-query";
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
  return useMutation({
    mutationFn: (orderNumber: number) => patchPayCancel(orderNumber),
  });
};

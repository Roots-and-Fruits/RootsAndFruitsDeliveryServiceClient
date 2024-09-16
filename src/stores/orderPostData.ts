import { OrderPostDataType } from "@types";
import { atom } from "jotai";

export const orderPostAtom = atom<OrderPostDataType>({
  senderName: "",
  senderPhone: "",
  optinalAgreement: false,
  recipientInfo: [
    {
      recipientName: "",
      recipientPhone: "",
      recipientAddress: "",
      recipientAddressDetail: "",
      productInfo: [
        {
          productId: 0,
          productCount: 0,
        },
      ],
      deliveryDate: "",
    },
  ],
});

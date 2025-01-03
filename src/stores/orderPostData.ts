import { atomWithStorage } from "jotai/utils";

export interface ProductInfo {
  productId: number;
  productName: string;
  productCount: number;
  productPrice: number;
}

export interface RecipientInfo {
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientAddressDetail: string;
  recipientPostCode: string;
  productInfo: ProductInfo[];
  selectedOption: "regular" | "scheduled";
  deliveryDate: string;
  orderPrice: number;
}

export interface OrderPostDataType {
  senderName: string;
  senderPhone: string;
  isPersonalInfoConsent: boolean;
  isMarketingConsent: boolean;
  recipientInfo: RecipientInfo[];
}

export const orderPostAtom = atomWithStorage<OrderPostDataType>(
  "orderPostAtom",
  {
    senderName: "",
    senderPhone: "",
    isPersonalInfoConsent: false,
    isMarketingConsent: false,
    recipientInfo: [],
  }
);

import { atom } from "jotai";

export interface ProductInfo {
  productId: number;
  productName: string;
  productCount: number;
}
export interface RecipientInfo {
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientAddressDetail: string;
  recipientPostCode: string;
  productInfo: ProductInfo[];
  deliveryDate: string;
}

export interface OrderPostDataType {
  senderName: string;
  senderPhone: string;
  isMarketingConsent: boolean;
  recipientInfo: RecipientInfo[];
}

export const orderPostAtom = atom<OrderPostDataType>({
  senderName: "",
  senderPhone: "",
  isMarketingConsent: false,
  recipientInfo: [],
});

export interface OrderPostDataType {
  senderName: string;
  senderPhone: string;
  optinalAgreement: boolean;
  recipientInfo: [
    {
      recipientName: string;
      recipientPhone: string;
      recipientAddress: string;
      recipientAddressDetail: string;
      productInfo: [
        {
          productId: number;
          productCount: number;
        }
      ];
      deliveryDate: string;
    }
  ];
}

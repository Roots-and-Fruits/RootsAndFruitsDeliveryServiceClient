export interface OrderInfo {
  productName: string;
  productCount: number;
  deliveryStatus: string;
  price: number;
}

export interface OrderInfoData {
  senderName: string;
  orderList: OrderInfo[];
  totalPrice: number;
}

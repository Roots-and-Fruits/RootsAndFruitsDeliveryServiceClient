export interface OrderInfo {
  productName: string;
  productCount: number;
  deliveryStatus: string;
  price: number;
  orderTimeInfo: string;
}

export interface OrderInfoData {
  senderName: string;
  orderList: OrderInfo[];
  totalPrice: number;
}

export interface OrderInfo {
  productName: string;
  productCount: number;
  orderState: string;
  price: number;
}

export interface OrderInfoData {
  senderName: string;
  orderList: OrderInfo[];
  totalPrice: number;
}

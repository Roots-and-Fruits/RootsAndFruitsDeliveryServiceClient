export interface Order {
  deliveryId: number;
  orderNumber: number;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  recipientAddressDetail: string;
  recipientPostCode: string;
  productList: string[]; // 제품 리스트는 문자열 배열
  productTotalCount: number;
  deliveryStatus: string;
  orderReceivedDate: string; // 날짜를 문자열로 표현
  deliveryDate: string; // 날짜를 문자열로 표현
}

// 전체 데이터 구조를 위한 타입 정의
export interface OrderData {
  orderList: Order[];
}

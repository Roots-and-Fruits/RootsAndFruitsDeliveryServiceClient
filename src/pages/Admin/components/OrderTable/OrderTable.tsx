import { tableStyle } from "./OrderTable.style";

interface Order {
  id: number;
  접수날짜: string;
  주문번호: string;
  상품명: string;
  보내는분: string;
  보내는분전화번호: string;
  받는분: string;
  받는분전화번호: string;
  받는분주소: string;
  배송날짜: string;
  결제내역: string;
}

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>접수 날짜</th>
          <th>주문 번호</th>
          <th>상품명</th>
          <th>보내는 분</th>
          <th>보내는 분 전화번호</th>
          <th>받는 분</th>
          <th>받는 분 전화번호</th>
          <th>받는 분 주소</th>
          <th>배송 날짜</th>
          <th>결제 내역</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{order.접수날짜}</td>
            <td>{order.주문번호}</td>
            <td>{order.상품명}</td>
            <td>{order.보내는분}</td>
            <td>{order.보내는분전화번호}</td>
            <td>{order.받는분}</td>
            <td>{order.받는분전화번호}</td>
            <td>{order.받는분주소}</td>
            <td>{order.배송날짜}</td>
            <td>{order.결제내역}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;

import { useState } from "react";
import {
  buttonContainer,
  checkboxStyle,
  iconStyle,
  sectionStyle,
  sectionTitle,
  tableHeader,
  tableStyle,
  tableWrapper,
} from "./OrderTable.style";
import { Order } from "@types";
import { usePatchDeliveryShipped } from "@apis/domains/admin/usePatchDeliveryShipped";
import { Button } from "@components";
import { IcCheckedTrue, IcDownload } from "@svg";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const { mutate } = usePatchDeliveryShipped();

  const handleShippedClick = () => {
    mutate(selectedOrders);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((orderId) => orderId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      const allOrderIds = orders
        .filter((order) => order.deliveryStatus === "결제완료")
        .map((order) => order.deliveryId);

      if (allOrderIds.length === 0) return;
      setSelectedOrders(allOrderIds);
    } else {
      setSelectedOrders([]);
    }
  };

  const isAllSelected =
    selectedOrders.length > 0 &&
    selectedOrders.length ===
      orders.filter((order) => order.deliveryStatus === "결제완료").length;
  return (
    <article css={sectionStyle}>
      <header css={tableHeader}>
        <h3 css={sectionTitle}>주문내역</h3>
        <div css={buttonContainer}>
          <Button variant="smallStroke" onClick={handleShippedClick}>
            <IcCheckedTrue css={iconStyle} />
            <span>선택 발송완료</span>
          </Button>
          <Button variant="smallStroke">
            <IcDownload css={iconStyle} />
            <span>엑셀 다운로드</span>
          </Button>
        </div>
      </header>
      <main css={tableWrapper}>
        <table css={tableStyle}>
          <thead>
            <tr>
              <th>
                <input
                  css={checkboxStyle}
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAllChange(e.target.checked)}
                />
              </th>
              <th>접수 날짜</th>
              <th>주문 번호</th>
              <th>상품명</th>
              <th>보내는 분</th>
              <th>보내는 분 전화번호</th>
              <th>받는 분</th>
              <th>받는 분 전화번호</th>
              <th>받는 분 주소</th>
              <th>출발 날짜</th>
              <th>결제 내역</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.deliveryId}>
                <td>
                  <input
                    css={checkboxStyle}
                    type="checkbox"
                    checked={
                      order.deliveryStatus !== "결제완료"
                        ? false
                        : selectedOrders.includes(order.deliveryId)
                    }
                    disabled={order.deliveryStatus !== "결제완료"}
                    onChange={() => handleCheckboxChange(order.deliveryId)}
                  />
                </td>
                <td>{order.orderReceivedDate}</td>
                <td>{order.orderNumber}</td>
                <td>{...order.productList}</td>
                <td>{order.senderName}</td>
                <td>{order.senderPhone}</td>
                <td>{order.recipientName}</td>
                <td>{order.recipientPhone}</td>
                <td>{order.recipientAddress}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.deliveryStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </article>
  );
};

export default OrderTable;

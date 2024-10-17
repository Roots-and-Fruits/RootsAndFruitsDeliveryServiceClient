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
import * as XLSX from "xlsx";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const { mutate } = usePatchDeliveryShipped();

  const handleShippedClick = () => {
    mutate(selectedOrders);
  };

  const exportToExcel = () => {
    const selectedData = orders.filter((order) =>
      selectedOrders.includes(order.deliveryId)
    );

    const data = selectedData.map((order) => {
      return {
        주문번호: "", // blank
        "보내는사람(지정)": order.senderName,
        "전화번호1(지정)": order.senderPhone,
        "전화번호2(지정)": "", // blank
        "우편번호(지정)": "63527", // 우편번호(지정)
        "주소(지정)": "제주특별자치도 서귀포시 안덕면 덕수동로25번길 42-8", // 고정 값
        받는사람: order.recipientName,
        전화번호1: order.recipientPhone,
        전화번호2: "", // blank
        우편번호: order.recipientPostCode,
        주소: `${order.recipientAddress} ${order.recipientAddressDetail}`,
        상품명1: order.productList.join(", "),
        상품상세1: "", // blank
        "수량(A타입)": order.productTotalCount,
        배송메시지: "", // blank
        운임구분: "", // blank
        운임: "", // blank
        운송장번호: "", // blank
      };
    });

    // 워크시트 생성
    const worksheet = XLSX.utils.json_to_sheet(data);
    // 워크북 생성
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // 워크북을 바이너리로 변환
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // 엑셀 파일로 다운로드
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "export.xlsx";
    link.click();
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
          <Button variant="smallStroke" onClick={exportToExcel}>
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
                <td>
                  {order.productList.map((product) => {
                    return <div>{product}</div>;
                  })}
                </td>
                <td>{order.senderName}</td>
                <td>{order.senderPhone}</td>
                <td>{order.recipientName}</td>
                <td>{order.recipientPhone}</td>
                <td>{`${order.recipientAddress} ${order.recipientAddressDetail}`}</td>
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

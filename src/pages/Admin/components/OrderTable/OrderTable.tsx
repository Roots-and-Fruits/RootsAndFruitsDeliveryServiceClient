import { useState } from "react";
import {
  buttonContainer,
  checkboxStyle,
  confrimModal,
  copyIconStyle,
  iconStyle,
  modalNotice,
  modalTitle,
  notesInput,
  noteTdBox,
  numberText,
  productText,
  sectionStyle,
  sectionTitle,
  tableHeader,
  tableStyle,
  tableWrapper,
} from "./OrderTable.style";
import { Order } from "@types";
import { usePatchDeliveryShipped } from "@apis/domains/admin/usePatchDeliveryShipped";
import { Button, Modal, Toast } from "@components";
import { IcCheckedTrue, IcCopy, IcDownload } from "@svg";
import * as XLSX from "xlsx";
import useToast from "src/hooks/useToast";
import { usePatchOrderNote } from "@apis/domains/admin/usePatchOrderNote";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable = ({ orders }: OrderTableProps) => {
  const [notesInputValue, setNotesInputValue] = useState<string>("");
  const [writingNotesOrderId, setWritingNotesOrderId] = useState<number | null>(
    null
  );

  const [selectedOrders, setSelectedOrders] = useState<number[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { showToast, isToastVisible } = useToast();
  const [toastMessage, setToastMessage] = useState("");

  const [productCount, setProductCount] = useState<Record<string, number>>({});

  const { mutate: patchOrderNote } = usePatchOrderNote();
  const { mutate } = usePatchDeliveryShipped();

  const handleShippedClick = () => {
    mutate(selectedOrders);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleExcelClick = () => {
    if (selectedOrders.length === 0) {
      setToastMessage("주문을 선택해주세요.");
      showToast();
      return;
    }
    const selectedData = orders.filter((order) =>
      selectedOrders.includes(order.deliveryId)
    );

    const count = selectedData
      .map((order) => order.productList)
      .flat()
      .reduce((acc, product) => {
        const match = product.match(/(.+)\s(\d+)EA$/);
        if (match) {
          const productName = match[1].trim();
          const quantity = parseInt(match[2], 10);

          acc[productName] = (acc[productName] || 0) + quantity;
        }
        return acc;
      }, {} as Record<string, number>);

    setIsModalOpen(true);
    setProductCount(count);
  };

  const exportToExcel = () => {
    const selectedData = orders.filter((order) =>
      selectedOrders.includes(order.deliveryId)
    );

    const data = selectedData.map((order) => {
      // productList에서 '묶음 배송 할인 nEA' 항목의 n값 추출
      const MATCH_BUNDLE_DISCOUNT = /묶음 배송 할인 (\d+)EA/;
      let bundleDiscountCount = 0;

      order.productList.forEach((product) => {
        const bundleDiscountMatch = product.match(MATCH_BUNDLE_DISCOUNT);
        if (bundleDiscountMatch) {
          bundleDiscountCount = parseInt(bundleDiscountMatch[1], 10);
        }
      });

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
        "수량(A타입)": order.productTotalCount - 2 * bundleDiscountCount,
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
    const date = new Date();
    const fileName = `택배송장_${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}_${date
      .getHours()
      .toString()
      .padStart(2, "0")}-${date.getMinutes().toString().padStart(2, "0")}.xlsx`;

    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    handleModalClose();
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

  const handleCopyClick = async (order: Order) => {
    const orderInfoData = `[접수날짜]
${order.orderReceivedDate}

[보내는 분]
${order.senderName}
${order.senderPhone}

[받는 분]
${order.recipientName}
${order.recipientPhone}
${order.recipientAddress} ${order.recipientAddressDetail}

[상품]
${order.productList.join(", ")}`;

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(orderInfoData);
        setToastMessage("주문내역이 복사되었어요.");
        showToast();
      } catch {
        setToastMessage("클립보드 복사 실패");
        showToast();
      }
    } else {
      setToastMessage("클립보드에 복사할 수 없습니다.");
      showToast();
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
          <Button variant="smallStroke" onClick={handleExcelClick}>
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
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
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
                <td>
                  <div css={numberText}>
                    <span>{order.orderNumber}</span>
                    <span
                      css={copyIconStyle}
                      onClick={() => handleCopyClick(order)}
                    >
                      <IcCopy />
                    </span>
                  </div>
                </td>
                <td>
                  {order.productList.map((product) => {
                    return <div key={`${index}-${product}`}>{product}</div>;
                  })}
                </td>
                <td>{order.senderName}</td>
                <td>{order.senderPhone}</td>
                <td>{order.recipientName}</td>
                <td>{order.recipientPhone}</td>
                <td>{`${order.recipientAddress} ${order.recipientAddressDetail}`}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.deliveryStatus}</td>
                <td
                  css={noteTdBox}
                  onClick={() => {
                    setWritingNotesOrderId(order.orderId);
                    setNotesInputValue(order.note);
                  }}
                >
                  {writingNotesOrderId === order.orderId ? (
                    <input
                      css={notesInput}
                      type="text"
                      value={notesInputValue}
                      onChange={(e) => setNotesInputValue(e.target.value)}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          e.currentTarget.blur();
                        }
                      }}
                      onBlur={() => {
                        if (notesInputValue !== order.note) {
                          patchOrderNote({
                            orderId: order.orderId,
                            note: notesInputValue,
                          });
                        }
                        setWritingNotesOrderId(null);
                        setNotesInputValue("");
                      }}
                    />
                  ) : (
                    order.note
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={confrimModal}>
            <h3
              css={modalTitle}
            >{`총 ${selectedOrders.length}개의 주문을 선택했습니다.`}</h3>
            <hr />
            {Object.entries(productCount).map(([productName, count]) => (
              <div key={productName} css={productText}>
                <span>{`${productName}: `}</span>
                <span>{`${count} 개`}</span>
              </div>
            ))}
            <hr />
            <p css={modalNotice}>이대로 엑셀을 다운로드 하시겠습니까?</p>
            <Button variant="fill" onClick={exportToExcel}>
              확인
            </Button>
          </article>
        </Modal>
      )}
      <Toast isVisible={isToastVisible} toastBottom={3}>
        {toastMessage}
      </Toast>
    </article>
  );
};

export default OrderTable;

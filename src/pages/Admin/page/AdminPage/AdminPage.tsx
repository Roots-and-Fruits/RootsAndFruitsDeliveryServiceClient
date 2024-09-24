import DeliveryCheck from "@pages/Admin/components/DeliveryCheck/DeliveryCheck";
import OrderCheck from "@pages/Admin/components/OrderCheck/OrderCheck";
import ProductCheck from "@pages/Admin/components/ProductCheck/ProductCheck";
import {
  activeTabButtonStyle,
  AdminLayout,
  tabButtonStyle,
  tabTextStyle,
  tapLayoutStyle,
} from "@pages/Admin/page/AdminPage/AdminPage.style";
import { useState } from "react";

type AdminType = "order" | "product" | "delivery";

const Admin = () => {
  const [pages, setPages] = useState<AdminType>("order");

  const handleButtonClick = (pages: AdminType) => {
    setPages(pages);
  };

  const switchTab = (pages: string) => {
    switch (pages) {
      case "order":
        return <OrderCheck />;
      case "product":
        return <ProductCheck />;
      case "delivery":
        return <DeliveryCheck />;
    }
  };

  return (
    <div css={AdminLayout}>
      <div css={tapLayoutStyle}>
        <h1 css={tabTextStyle}>Course</h1>
        <button
          css={[tabButtonStyle, pages === "order" && activeTabButtonStyle]}
          onClick={() => handleButtonClick("order")}
        >
          주문 조회
        </button>
        <button
          css={[tabButtonStyle, pages === "product" && activeTabButtonStyle]}
          onClick={() => handleButtonClick("product")}
        >
          상품 조회
        </button>
        <button
          css={[tabButtonStyle, pages === "delivery" && activeTabButtonStyle]}
          onClick={() => handleButtonClick("delivery")}
        >
          배송 가능 날짜
        </button>
      </div>

      <div>{switchTab(pages)}</div>
    </div>
  );
};

export default Admin;

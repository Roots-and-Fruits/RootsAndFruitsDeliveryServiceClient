import {
  activeTabMenuStyle,
  adminHeader,
  AdminLayout,
  headerLogo,
  headerMenus,
  headerRight,
  headerSection,
  logoutButton,
  pageLayout,
  tabMenuStyle,
  tabTextStyle,
} from "./AdminPage.style";
import { useNavigate, useParams } from "react-router-dom";
import { OrderCheck, ProductCheck, DeliveryCheck } from "..";
import { IcMainCharacter } from "@svg";

const Admin = () => {
  const { tab = "order" } = useParams<{ tab: string }>();
  const navigate = useNavigate();

  const handleLogoutClick = (): void => {
    localStorage.removeItem("accessToken");
    navigate("/admin/login");
  };

  return (
    <div css={AdminLayout}>
      <header css={adminHeader}>
        <div css={[headerSection, headerLogo]}>
          <IcMainCharacter width={"4rem"} />
          <h1 css={tabTextStyle}>나무와 열매</h1>
        </div>
        <ul css={[headerSection, headerMenus]}>
          <li>
            <a
              css={[tabMenuStyle, tab === "order" && activeTabMenuStyle]}
              href="/admin/order"
            >
              주문 조회
            </a>
          </li>
          <li>
            <a
              css={[tabMenuStyle, tab === "product" && activeTabMenuStyle]}
              href="/admin/product"
            >
              상품 조회
            </a>
          </li>
          <li>
            <a
              css={[tabMenuStyle, tab === "delivery" && activeTabMenuStyle]}
              href="/admin/delivery"
            >
              배송 가능 날짜
            </a>
          </li>
        </ul>
        <div css={[headerSection, headerRight]}>
          <button css={logoutButton} onClick={handleLogoutClick}>
            로그아웃
          </button>
        </div>
      </header>

      <div css={pageLayout}>
        {tab === "order" && <OrderCheck />}
        {tab === "product" && <ProductCheck />}
        {tab === "delivery" && <DeliveryCheck />}
      </div>
    </div>
  );
};

export default Admin;

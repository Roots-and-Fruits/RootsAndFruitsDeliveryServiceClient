import { Edit } from "@components";
import { routePath } from "@constants";
import OrderInfoPage from "@pages/orderInfo/page/OrderInfoPage/OrderInfoPage";
import { RouteType } from "@types";

const orderInfoRoutes: RouteType[] = [
  {
    path: routePath.ORDER_INFO,
    element: <OrderInfoPage />,
  },
  {
    path: routePath.ORDER_INFO_EDIT,
    element: <Edit />,
  },
];

export default orderInfoRoutes;

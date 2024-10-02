import { routePath } from "@constants";
import OrderCheckPage from "@pages/orderCheck/page/OrderCheckPage";
import { RouteType } from "@types";

const orderCheckRoutes: RouteType[] = [
  {
    path: routePath.ORDER_CHECK,
    element: <OrderCheckPage />,
  },
];

export default orderCheckRoutes;

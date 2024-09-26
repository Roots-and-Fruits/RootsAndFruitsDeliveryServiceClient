import { routePath } from "@constants";
import { Admin } from "@pages/index";
import { RouteType } from "@types";
import { Navigate } from "react-router-dom";

const adminRoutes: RouteType[] = [
  {
    path: routePath.ADMIN,
    element: <Navigate to={routePath.ADMIN_TAB.replace(":tab", "order")} />,
  },
  {
    path: routePath.ADMIN_TAB,
    element: <Admin />,
  },
];

export default adminRoutes;

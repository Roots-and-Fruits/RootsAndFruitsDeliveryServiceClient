import { routePath } from "@constants";
import { AdminLogin } from "@pages/Admin/page";
import { RouteType } from "@types";

const authRoutes: RouteType[] = [
  {
    path: routePath.ADMIN_LOGIN,
    element: <AdminLogin />,
  },
];

export default authRoutes;

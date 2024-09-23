import { routePath } from "@constants";
import { Admin } from "@pages/index";
import { RouteType } from "@types";

const adminRoutes: RouteType[] = [
  {
    path: routePath.ADMIN,
    element: <Admin />,
  },
];

export default adminRoutes;

import { routePath } from "@constants";
import { Home } from "@pages/index";
import { RouteType } from "@types";

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
];

export default homeRoutes;

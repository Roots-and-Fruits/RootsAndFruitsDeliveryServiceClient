import { routePath } from "@constants";
import { ExperienceHome, Home, ProductHome } from "@pages/index";
import { RouteType } from "@types";

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
  {
    path: routePath.PRODUCT_HOME,
    element: <ProductHome />,
  },
  {
    path: routePath.EXPERIENCE_HOME,
    element: <ExperienceHome />,
  },
];

export default homeRoutes;

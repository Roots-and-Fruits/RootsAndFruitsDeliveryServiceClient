import { routePath } from "@constants";
import { ExperienceHome, ProductHome } from "@pages/index";
import { RouteType } from "@types";

const homeRoutes: RouteType[] = [
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

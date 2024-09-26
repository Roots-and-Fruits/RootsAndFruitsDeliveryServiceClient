import { routePath } from "@constants";
import { ExperienceHome, ProductHome } from "@pages/index";
import { RouteType } from "@types";
import { Navigate } from "react-router-dom";

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOME,
    element: <Navigate to={routePath.PRODUCT_HOME} />,
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

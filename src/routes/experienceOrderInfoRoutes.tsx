import { Edit } from "@components";
import { routePath } from "@constants";
import ExperienceOrderInfoPage from "@pages/experienceOrderInfo/page/ExperienceOrderInfoPage/ExperienceOrderInfoPage";
import { RouteType } from "@types";

const experienceOrderInfoRoutes: RouteType[] = [
  {
    path: routePath.EXPERIENCE_ORDER_INFO,
    element: <ExperienceOrderInfoPage />,
  },
  {
    path: routePath.EXPERIENCE_ORDER_INFO_EDIT,
    element: <Edit />,
  },
];

export default experienceOrderInfoRoutes;

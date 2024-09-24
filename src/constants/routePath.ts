const homePages = {
  HOME: "/",
};

const orderInfoPages = {
  ORDER_INFO: "/order-info/:step",
  ORDER_INFO_EDIT: "/order-info/check-info/edit",
};

const adminPages = {
  ADMIN: "/admin",
  ADMIN_TAB: "/admin/:tab",
};

export default {
  ...homePages,
  ...orderInfoPages,
  ...adminPages,
};

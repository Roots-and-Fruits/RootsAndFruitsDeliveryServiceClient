const homePages = {
  HOME: "/",
};

const orderInfoPages = {
  ORDER_INFO: "/order-info/:step",
  ORDER_INFO_EDIT: "/order-info/check-info/edit",
};

export default {
  ...homePages,
  ...orderInfoPages,
};

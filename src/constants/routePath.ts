const productHomePages = {
  PRODUCT_HOME: "/product",
};

const experienceHomePages = {
  EXPERIENCE_HOME: "/experience",
};

const orderInfoPages = {
  ORDER_INFO: "/product/order-info/:step",
  ORDER_INFO_EDIT: "/product/order-info/check-info/edit",
};

const experienceProductOrderInfoPages = {
  EXPERIENCE_ORDER_INFO: "/experience/order-info/:step",
  EXPERIENCE_ORDER_INFO_EDIT: "/experience/order-info/check-info/edit",
};

export default {
  ...productHomePages,
  ...experienceHomePages,
  ...orderInfoPages,
  ...experienceProductOrderInfoPages,
};

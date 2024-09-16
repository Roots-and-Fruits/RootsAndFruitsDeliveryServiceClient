import { orderPostAtom } from "@stores";
import { OrderPostDataType } from "@types";
import { formatPhoneNumber } from "@utils";
import { useAtom } from "jotai";
import React from "react";

export const useOrderPostDataChange = () => {
  const [orderPostDataState, setOrderPostDataState] = useAtom(orderPostAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof OrderPostDataType
  ) => {
    let value = e.target.value;

    if (key === "senderPhone") {
      value = formatPhoneNumber(value);
    }

    setOrderPostDataState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleOptinalAgreementClick = () => {
    setOrderPostDataState((prevState) => ({
      ...prevState,
      optinalAgreement: !prevState.optinalAgreement,
    }));
  };

  return {
    orderPostDataState,
    handleInputChange,
    handleOptinalAgreementClick,
  };
};

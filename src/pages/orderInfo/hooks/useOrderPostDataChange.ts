import { orderPostAtom } from "@stores";
import { formatPhoneNumber } from "@utils";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { OrderPostDataType, RecipientInfo } from "src/stores/orderPostData";

export const useOrderPostDataChange = () => {
  const [orderPostDataState, setOrderPostDataState] = useAtom(orderPostAtom);
  const [currentRecipientIndex, setCurrentRecipientIndex] = useState(0);

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
      isMarketingConsent: !prevState.isMarketingConsent,
    }));
  };

  const handleRecipientInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    key: keyof RecipientInfo
  ) => {
    let value: string;

    if (typeof e === "string") {
      value = e;
    } else {
      value = e.target.value;
    }

    if (key === "recipientPhone") {
      value = formatPhoneNumber(value);
    }
    setOrderPostDataState((prevState) => {
      const updatedRecipientInfo = [...prevState.recipientInfo];
      updatedRecipientInfo[currentRecipientIndex] = {
        ...updatedRecipientInfo[currentRecipientIndex],
        [key]: value,
      };
      return {
        ...prevState,
        recipientInfo: updatedRecipientInfo,
      };
    });
  };

  return {
    orderPostDataState,
    currentRecipientIndex,
    handleInputChange,
    handleOptinalAgreementClick,
    handleRecipientInputChange,
  };
};

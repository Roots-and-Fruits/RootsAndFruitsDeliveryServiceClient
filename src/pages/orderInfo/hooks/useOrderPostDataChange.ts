import { currentRecipient, orderPostAtom } from "@stores";
import { formatPhoneNumber } from "@utils";
import { useAtom } from "jotai";
import React from "react";
import { OrderPostDataType, RecipientInfo } from "src/stores/orderPostData";

export const useOrderPostDataChange = () => {
  const [orderPostDataState, setOrderPostDataState] = useAtom(orderPostAtom);
  const [currentRecipientIndex, setCurrentRecipientIndex] =
    useAtom(currentRecipient);

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
    key: keyof RecipientInfo,
    index?: number
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
      const recipientIndex =
        index !== undefined ? index : currentRecipientIndex;

      updatedRecipientInfo[recipientIndex] = {
        ...updatedRecipientInfo[recipientIndex],
        [key]: value,
      };
      return {
        ...prevState,
        recipientInfo: updatedRecipientInfo,
      };
    });
  };

  const handleAddReceiver = () => {
    const newRecipient: RecipientInfo = {
      recipientName: "",
      recipientPhone: "",
      recipientAddress: "",
      recipientAddressDetail: "",
      deliveryDate: "",
      productInfo: [],
    };

    setOrderPostDataState((prevState) => ({
      ...prevState,
      recipientInfo: [...prevState.recipientInfo, newRecipient],
    }));
  };

  const handleSetIndex = () => {
    setCurrentRecipientIndex((prevIndex) => prevIndex + 1);
  };

  return {
    orderPostDataState,
    currentRecipientIndex,
    handleInputChange,
    handleOptinalAgreementClick,
    handleRecipientInputChange,
    handleAddReceiver,
    handleSetIndex,
  };
};

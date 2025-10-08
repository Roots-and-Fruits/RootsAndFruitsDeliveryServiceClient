import { currentRecipient, orderNumber, orderPostAtom } from "@stores";
import { formatPhoneNumber } from "@utils";
import { useAtom } from "jotai";
import React from "react";
import {
  OrderPostDataType,
  ProductInfo,
  RecipientInfo,
} from "src/stores/orderPostData";

export const useOrderPostDataChange = () => {
  const [orderPostDataState, setOrderPostDataState] = useAtom(orderPostAtom);
  const [currentRecipientIndex, setCurrentRecipientIndex] =
    useAtom(currentRecipient);
  const [orderNumberState, setOrderNumberState] = useAtom(orderNumber);

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

  const handleRequiredCheckClick = () => {
    setOrderPostDataState((prevState) => ({
      ...prevState,
      isPersonalInfoConsent: !prevState.isPersonalInfoConsent,
    }));
  };
  const handleOptinalAgreementClick = () => {
    setOrderPostDataState((prevState) => ({
      ...prevState,
      isMarketingConsent: !prevState.isMarketingConsent,
    }));
  };

  const handleRecipientInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | string | ProductInfo[],
    key: keyof RecipientInfo,
    index?: number
  ) => {
    let value: string | ProductInfo[];

    if (typeof e === "string" || Array.isArray(e)) {
      value = e;
    } else {
      value = e.target.value;
    }

    if (key === "recipientPhone") {
      value = formatPhoneNumber(value as string);
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

  const handleChangeOrderPrice = (price: number, index: number) => {
    const recipientIndex = index !== undefined ? index : currentRecipientIndex;
    setOrderPostDataState((prevState) => {
      const updatedRecipientInfo = [...prevState.recipientInfo];
      updatedRecipientInfo[recipientIndex] = {
        ...updatedRecipientInfo[recipientIndex],
        orderPrice: price,
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
      recipientPostCode: "",
      selectedOption: "regular",
      deliveryDate: "",
      productInfo: [],
      orderPrice: 0,
      bundleProductCount: 0,
    };

    setOrderPostDataState((prevState) => ({
      ...prevState,
      recipientInfo: [...prevState.recipientInfo, newRecipient],
    }));
    setCurrentRecipientIndex((prevIndex) => prevIndex + 1);
  };

  const handleDeleteClick = (index: number) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      setOrderPostDataState((prevState) => {
        const updatedRecipientInfo = [...prevState.recipientInfo];
        updatedRecipientInfo.splice(index, 1);
        return {
          ...prevState,
          recipientInfo: updatedRecipientInfo,
        };
      });
      setCurrentRecipientIndex((prevIndex) => prevIndex - 1);
    }
  };

  const resetOrderPostData = () => {
    setOrderPostDataState({
      senderName: "",
      senderPhone: "",
      isPersonalInfoConsent: false,
      isMarketingConsent: false,
      recipientInfo: [],
    });
  };

  return {
    orderPostDataState,
    currentRecipientIndex,
    handleInputChange,
    handleRequiredCheckClick,
    handleOptinalAgreementClick,
    handleRecipientInputChange,
    handleChangeOrderPrice,
    handleAddReceiver,
    orderNumberState,
    setOrderNumberState,
    handleDeleteClick,
    resetOrderPostData,
  };
};

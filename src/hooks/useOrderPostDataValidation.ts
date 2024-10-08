const useOrderPostDataValidation = () => {
  const validateLength = (answer: string) => {
    return answer.trim().length >= 1;
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/-/g, "");
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(digitsOnly);
  };

  const validateSender = (state: {
    senderName: string;
    senderPhone: string;
    isPersonalInfoConsent: boolean;
  }) => {
    const isSenderNameValid = validateLength(state.senderName);
    const isSenderPhoneValid = validatePhone(state.senderPhone);
    const isAllValid =
      isSenderNameValid && isSenderPhoneValid && state.isPersonalInfoConsent;

    return {
      isAllValid,
    };
  };

  const validateReceiver1 = (state: {
    recipientName: string;
    recipientPhone: string;
  }) => {
    const isRecipientNameValid = validateLength(state.recipientName);
    const isRecipientPhoneValid = validatePhone(state.recipientPhone);
    const isAllValid = isRecipientNameValid && isRecipientPhoneValid;

    return {
      isAllValid,
    };
  };

  return {
    validateSender,
    validateReceiver1,
  };
};

export default useOrderPostDataValidation;

const useOrderPostDataValidation = () => {
  const validateLength = (answer: string) => {
    return answer.trim().length >= 1;
  };

  const validatePhone = (phone: string) => {
    const digitsOnly = phone.replace(/-/g, "");
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(digitsOnly);
  };

  const validateSender = (state: {
    senderName: string;
    senderPhone: string;
  }) => {
    const isSenderNameValid = validateLength(state.senderName);
    const isSenderPhoneValid = validatePhone(state.senderPhone);
    const isAllValid = isSenderNameValid && isSenderPhoneValid;

    return {
      isAllValid,
    };
  };

  return {
    validateSender,
  };
};

export default useOrderPostDataValidation;

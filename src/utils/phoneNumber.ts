const VALID_PREFIXES = ["010", "011", "016", "017", "018", "019"];

export const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, "");

  const prefix = VALID_PREFIXES.find((prefix) => numbers.startsWith(prefix));

  if (!prefix) {
    return numbers.slice(0, 3);
  }

  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
      7,
      11
    )}`;
  }
};

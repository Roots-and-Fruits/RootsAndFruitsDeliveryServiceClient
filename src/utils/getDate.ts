export const getTwoDaysLaterDate = (): string => {
  const today = new Date();
  const twoDaysLater = new Date(today);
  twoDaysLater.setDate(today.getDate() + 2);

  const year = twoDaysLater.getFullYear();
  const month = (twoDaysLater.getMonth() + 1).toString().padStart(2, "0");
  const day = twoDaysLater.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};

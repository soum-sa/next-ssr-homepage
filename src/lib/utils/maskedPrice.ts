export const maskedPrice = (value: string | number) => {
  const priceString = value.toString();
  const maskedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return maskedPrice;
};

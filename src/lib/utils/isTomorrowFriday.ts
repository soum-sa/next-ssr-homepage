export const isTomorrowFriday = (): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return tomorrow.getDay() === 5; // Friday is day 5
};

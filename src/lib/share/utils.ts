export const commaSeparate = (words?: string | string[]) =>
  typeof words === "string" ? words : words?.join(",");

export const CATEGORY_CAR_PLATES = "car plates";
export const CATEGORY_REAL_ESTATE = "real estate";
export const CATEGORY_CARS = "cars";

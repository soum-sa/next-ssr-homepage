export const DIRECTIONS = {
  ltr: "ltr",
  rtl: "rtl",
} as const;

export type DIRECTION = keyof typeof DIRECTIONS;

export const LOCALES = {
  ar: "ar",
  en: "en",
} as const;

export type LOCALE = keyof typeof LOCALES;

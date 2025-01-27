import { useLocale } from "next-intl";

export type I18nDirection = "ltr" | "rtl";

export function useI18nStore() {
  const locale = useLocale();

  return {
    isRTL: locale.includes("ar") ? true : false,
    direction: locale.includes("ar") ? "rtl" : "ltr",
    locale,
  };
}

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const i18nConfig = {
  locales: ["ar", "en", "en-SA", "ar-SA"],
  defaultLocale: "ar",
  localePrefix: "as-needed",
} as const;

export const routing = defineRouting(i18nConfig);

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

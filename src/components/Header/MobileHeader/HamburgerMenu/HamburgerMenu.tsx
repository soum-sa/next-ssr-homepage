import { useTranslations } from "next-intl";

import { BurgerIcon } from "@src/styles/icons";

export function HamburgerMenu() {
  const seoTranslations = useTranslations("seo");

  return <BurgerIcon aria-label={seoTranslations("menuButton.iconText")} />;
}

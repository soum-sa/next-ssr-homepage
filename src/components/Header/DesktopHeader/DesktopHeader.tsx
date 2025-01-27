"use client";

import { useLocale, useTranslations } from "next-intl";
import { hstack } from "@panda-styled-system/patterns";

import { Link, usePathname } from "@src/i18n/routing";

import { useSearchParams } from "next/dist/client/components/navigation";
import { LangChangeIcon, SoumLogoAr } from "@src/styles/icons";

import {
  header,
  navList,
  navLink,
  langSwitcherStyles,
} from "./DesktopHeader.styled";

type DesktopHeaderProps = {
  nonAuthComponent: React.ReactNode;
};

export function DesktopHeader({
  nonAuthComponent: NonAuthComponent,
}: DesktopHeaderProps) {
  const t = useTranslations("desktopHeader");

  const seoTranslations = useTranslations("seo");

  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Use searchParams to get the current query parameters

  // Build the query string from current searchParams
  const currentQueryParams = searchParams ? searchParams.toString() : "";
  const queryString = currentQueryParams ? `?${currentQueryParams}` : "";

  return (
    <header className={header}>
      <Link
        data-test-id="HomePageLink"
        href="/"
        className={hstack({ gap: 2, alignItems: "center" })}
        aria-label={seoTranslations("soumLogo.linkText")}
      >
        <SoumLogoAr
          role="img"
          aria-label={seoTranslations("soumLogo.imgText")}
          width="6.5rem"
          height="3.25rem"
          type="desktop"
        />
      </Link>

      <nav>
        <ul className={navList}>
          <li data-test-id="SellPage__NavLink">
            <Link className={navLink} href="/sell">
              {t("sell")}
            </Link>
          </li>

          <li data-test-id="BlogPage__NavLink">
            <Link className={navLink} href="/blog">
              {t("blog")}
            </Link>
          </li>
        </ul>
      </nav>

      {NonAuthComponent}

      <Link
        href={`${pathname}${queryString}`} // Preserve query string when switching locales
        locale={locale.includes("ar") ? "en" : "ar"}
        data-test-id="LanguageSwitcher"
        role="button"
        className={langSwitcherStyles}
      >
        <span>{t("language")}</span>
        <LangChangeIcon />
      </Link>
    </header>
  );
}

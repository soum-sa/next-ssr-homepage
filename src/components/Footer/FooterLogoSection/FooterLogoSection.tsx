"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { SoumLogoAr } from "@src/styles/icons";

import { logoContainer, logoDescription } from "./FooterLogoSection.styled";
import { FooterLegalInformation } from "../FooterLegalInformation";
import { MediaQueryWrapper } from "@src/styles/components";

export function FooterLogoSection() {
  const t = useTranslations("footer");
  const seoTranslations = useTranslations("seo");

  return (
    <div className={logoContainer}>
      <Link href="/" aria-label={seoTranslations("soumLogo.linkText")}>
        <SoumLogoAr
          role="img"
          aria-label={seoTranslations("soumLogo.imgText")}
          width="6.5rem"
          height="3.25rem"
          type="desktop"
        />
      </Link>
      <h2 className={logoDescription}>{t("soumDescription")}</h2>
      <MediaQueryWrapper tablet={<FooterLegalInformation />} />
    </div>
  );
}

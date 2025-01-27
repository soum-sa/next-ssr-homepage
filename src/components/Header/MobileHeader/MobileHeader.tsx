"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import { Link } from "@src/i18n/routing";
import { hstack } from "@panda-styled-system/patterns";
import { SoumLogoAr } from "@src/styles/icons";

import { css } from "@panda-styled-system/css";

const HamburgerMenu = dynamic(() =>
  import("./HamburgerMenu").then((mod) => mod.HamburgerMenu)
);

export function MobileHeader() {
  const seoTranslations = useTranslations("seo");

  return (
    <div
      data-component="MobileHeader"
      className={hstack({ gap: "2", paddingBlock: "5" })}
    >
      <HamburgerMenu />

      <div
        className={css({
          flex: 1,
          display: "flex",
          position: "relative",
          justifyContent: "center",
        })}
      >
        <Link
          href="/"
          aria-label={seoTranslations("soumLogo.linkText")}
          className={hstack({ gap: "2" })}
        >
          <SoumLogoAr
            aria-label={seoTranslations("soumLogo.linkText")}
            width="5.625rem"
            height="2.5rem"
            type="mobile"
          />
        </Link>
      </div>
    </div>
  );
}

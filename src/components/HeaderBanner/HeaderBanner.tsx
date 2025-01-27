"use client";

import { useMemo } from "react";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { HeaderBannerAndBreadCrumbHiddenConditions } from "@src/lib/utils/HeadeBannerAndBreadCrumbHiddenConditions";

import {
  headerBannerRootStyles,
  layoutContainerStyles,
  headerTitleStyles,
  logoBoxStyles,
  BannerLogo,
  textBoxStyles,
} from "./HeaderBanner.styled";
import { usePathname } from "@src/i18n/routing";
import { toUpperCase } from "@src/infra/helpers/utils";

export function HeaderBanner() {
  const t = useTranslations("headerBanner");
  const params = useParams<{
    categoryName: string;
    brandName: string;
    modelName: "string";
  }>();
  const pathname = usePathname();

  const decodedName = (value: string) => toUpperCase(decodeURIComponent(value));

  const modelName = params?.modelName ? decodedName(params?.modelName) : "";
  const brandName = params?.brandName ? decodedName(params?.brandName) : "";
  const categoryName = decodeURIComponent(params?.categoryName || "");

  const deviceName = useMemo(() => {
    if (modelName && brandName && categoryName) {
      return `${modelName} ${brandName}`;
    }
    if (brandName && categoryName) {
      return `${categoryName} ${brandName}`;
    }
    if (categoryName) {
      return categoryName;
    }
    return "";
  }, [modelName, brandName, categoryName]);

  const title = useMemo(() => {
    if (!deviceName.length)
      return `${t("title1")} ${t("textForDevices")} ${t("title2")}`;

    if (
      (categoryName?.length && categoryName === "real-estate") ||
      categoryName === "عقار"
    ) {
      return t("realEstatePageTitle");
    }
    if (modelName?.length && brandName?.length) {
      return `${t("title1")} ${deviceName} ${t("modelPageTitle")}`;
    }

    if (brandName?.length && categoryName?.length) {
      return `${t("title1")} ${deviceName} ${t("brandPageTitle")}`;
    }

    return `${t("title1")} ${deviceName} ${t("title2")}`;
  }, [brandName?.length, categoryName, deviceName, modelName?.length, t]);

  if (HeaderBannerAndBreadCrumbHiddenConditions(pathname ?? "")) {
    return null;
  }

  return (
    <section className={headerBannerRootStyles}>
      <div className={layoutContainerStyles}>
        <div className={logoBoxStyles}>
          <BannerLogo />
        </div>
        <div className={textBoxStyles}>
          <h1 className={headerTitleStyles}>{title}</h1>
        </div>
      </div>
    </section>
  );
}

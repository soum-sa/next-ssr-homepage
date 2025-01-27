"use client";

import { useTranslations } from "next-intl";

import { Link as NextLink } from "@src/i18n/routing";
import { useI18nStore } from "@src/i18n/useI18nStore";

import {
  categoryContainer,
  categoryHeading,
  categoryList,
  categoryItem,
  browseButton,
} from "./FooterCategories.styled";
import { TOP_CATEGORIES } from "../constants";
import { Category } from "../Footer.types";
import { FOOTER_CATEGORY_TITLES } from "./constants";
import { FooterChevronRight } from "@src/styles/icons";

export function FooterCategories() {
  const t = useTranslations("footer");
  const { isRTL } = useI18nStore();
  const seoTranslations = useTranslations("seo");

  return (
    <div className={categoryContainer}>
      <h2 className={categoryHeading}>{t("topCategory")}</h2>
      <div className={categoryList}>
        {TOP_CATEGORIES.map((category: Category) => {
          const title = isRTL
            ? FOOTER_CATEGORY_TITLES[category.title.toLowerCase()]?.ar
            : FOOTER_CATEGORY_TITLES[category.title.toLowerCase()]?.en;

          return (
            <NextLink
              href={`/category/${category.baseUrl}`}
              className={categoryItem}
              key={category.title}
              aria-label={seoTranslations("categoryIcon.linkText", {
                arName: category.arName,
                enName: category.title,
              })}
              title={title}
            >
              <h3>{isRTL ? category.arName : category.title}</h3>
            </NextLink>
          );
        })}
        <NextLink
          href="#categories-section"
          className={browseButton}
          aria-label={t("browseProducts")}
        >
          <h3>{t("browseProducts")}</h3>
          <FooterChevronRight style={{ rotate: isRTL ? "180deg" : "0" }} />
        </NextLink>
      </div>
    </div>
  );
}

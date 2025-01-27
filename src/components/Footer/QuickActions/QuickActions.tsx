"use client";

import { useTranslations } from "next-intl";

import { useI18nStore } from "@src/i18n/useI18nStore";
import { Link as NextLink } from "@src/i18n/routing";

import { QUICK_ACTIONS } from "../constants";
import { QuickAction } from "../Footer.types";
import {
  quickActionsContainer,
  quickActionsHeading,
  quickActionsList,
  quickActionItem,
} from "./QuickActions.styled";

export function QuickActions() {
  const t = useTranslations("footer");
  const { isRTL } = useI18nStore();

  return (
    <div className={quickActionsContainer}>
      <h2 className={quickActionsHeading}>{t("quickActions")}</h2>
      <div className={quickActionsList}>
        {QUICK_ACTIONS.map((action: QuickAction) => {
          if (
            action.title.toLowerCase() === "Sell" ||
            action.arName === "البيع في سوم"
          ) {
            return (
              <div key={action.title}>
                <NextLink
                  href={
                    action.isExternal ? action.baseUrl : `/${action.baseUrl}`
                  }
                  className={quickActionItem}
                  key={action.title}
                  aria-label={isRTL ? action.ariaLabelAr : action.ariaLabelEn}
                  title={
                    isRTL
                      ? "بيع الكترونيات مستعملة في السعودية"
                      : "Sell Used electronics in Saudi Arabia"
                  }
                >
                  <h3>{isRTL ? action.arName : action.title}</h3>
                </NextLink>
              </div>
            );
          }

          return (
            <NextLink
              href={action.isExternal ? action.baseUrl : `/${action.baseUrl}`}
              className={quickActionItem}
              key={action.title}
              aria-label={isRTL ? action.ariaLabelAr : action.ariaLabelEn}
            >
              <h3>{isRTL ? action.arName : action.title}</h3>
            </NextLink>
          );
        })}
      </div>
    </div>
  );
}

import { useI18nStore } from "@src/i18n/useI18nStore";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";
import { GetCategoryListModel } from "@src/types";
import { useCallback } from "react";

export function useCategoryUtils() {
  const { isRTL, locale } = useI18nStore();

  const displayName = useCallback<(category: GetCategoryListModel) => string>(
    (category) => {
      return isRTL ? category.arName : category.name;
    },
    [isRTL]
  );

  const getCategoryLink = useCallback<
    (category: GetCategoryListModel) => string
  >(
    (category) => {
      return getLink(category, locale as LOCALE);
    },
    [locale]
  );

  return {
    displayName,
    getCategoryLink,
  };
}

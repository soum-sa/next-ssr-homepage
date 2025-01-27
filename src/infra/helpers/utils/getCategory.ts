import { createSafeUrl } from "./createSafeUrl";

import { DomainGetCategoryListModel, GetCategoryListModel } from "@src/types";

export const getCategoryFromDomainGetCategoryListModel = (
  categories: DomainGetCategoryListModel[],
  categoryName: string
) => {
  categoryName = decodeURIComponent(categoryName);

  return categories?.find((category) => {
    return [
      createSafeUrl(category?.category_name),
      createSafeUrl(category?.category_name_ar),
    ].includes(categoryName);
  });
};

export const getCategoryFromGetCategoryListModel = (
  categories: GetCategoryListModel[],
  categoryName: string
) => {
  categoryName = decodeURIComponent(categoryName);

  return categories?.find((category) => {
    return [
      createSafeUrl(category.name),
      createSafeUrl(category.arName),
    ].includes(categoryName);
  });
};

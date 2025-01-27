import { DomainGetBrandListModel, GetBrandListModel } from "@src/types";
import { createSafeUrl } from "./createSafeUrl";

export const getBrandFromDomainGetBrandListModel = (
  brands: DomainGetBrandListModel[],
  brandName: string,
  currentCategoryId: string
) => {
  brandName = decodeURIComponent(brandName);

  return brands?.find((brand) => {
    if (brand.category_id !== currentCategoryId) {
      return false;
    }

    return [
      createSafeUrl(brand.brand_name),
      createSafeUrl(brand.brand_name_ar),
    ].includes(brandName);
  });
};

export const getBrandFromGetBrandListModel = (
  brands: GetBrandListModel[],
  brandName: string,
  currentCategoryId: string
) => {
  brandName = decodeURIComponent(brandName);

  return brands?.find((brand) => {
    if (brand.categoryId !== currentCategoryId) {
      return false;
    }

    return [createSafeUrl(brand.name), createSafeUrl(brand.arName)].includes(
      brandName
    );
  });
};

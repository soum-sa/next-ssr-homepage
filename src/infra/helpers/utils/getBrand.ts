import { DomainGetBrandList } from "@domain/usecases";
import { createSafeUrl } from "./createSafeUrl";
import { GetBrandList } from "@data/usecases";

export const getBrandFromDomainGetBrandListModel = (
  brands: DomainGetBrandList.Model[],
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
  brands: GetBrandList.Model[],
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

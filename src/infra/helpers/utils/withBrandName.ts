import { GetBrandList, GetProductsList } from "@data/usecases";

export function withBrandName(
  products: GetProductsList.Model[],
  normalizedBrands: Record<string, GetBrandList.Model>
): (GetProductsList.Model & { brandName: string; brandNameAr: string })[] {
  return products
    .map((product) => ({
      ...product,
      brandName: normalizedBrands[product.brandId]?.name,
      brandNameAr: normalizedBrands[product.brandId]?.arName,
    }))
    .filter((product) => !!product.brandName);
}

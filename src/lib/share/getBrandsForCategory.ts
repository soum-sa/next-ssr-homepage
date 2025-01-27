import { GetBrandList } from '@data/usecases';

const getBrandsForCategory = (categoryId: string, brands: GetBrandList): GetBrandList.Model[] => {
  return Object.values(brands).filter((brand) => brand.categoryId === categoryId);
};

export default getBrandsForCategory;

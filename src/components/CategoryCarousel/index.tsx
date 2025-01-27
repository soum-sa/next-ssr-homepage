"use client";

import { MediaQueryWrapper } from "@src/styles/components";
import DesktopCategoryCarousel from "./Desktop/DesktopCatergoryCarousel";
import MobileCategoryCarousel from "./Mobile/MobileCategoryCarousel";

const CategoryCarousal = () => {
  return (
    <MediaQueryWrapper
      mobile={<MobileCategoryCarousel />}
      tablet={<DesktopCategoryCarousel />}
    />
  );
};

export default CategoryCarousal;

import Image from "next/image";

import { Link } from "@src/i18n/routing";

import {
  CatBrandNewMobilesEnIcon,
  CatBrandNewMobilesArIcon,
  RightChevronIcon,
} from "@src/styles/icons";
import { GetCategoryList, useBrands, useBrandUtils } from "@soum-web/data";
import getBrandsForCategory from "@src/lib/share/getBrandsForCategory";

import {
  subCategoriesNav,
  nav__categories_list,
  nav__heading_subcategory,
  nav__categories_list_button_subcategory,
  nav__heading_subcategory_icon,
  navHeadingWrapper,
  subCatLinkStyles,
} from "./SubCategories.styled";
import { useI18nStore } from "@src/i18n/useI18nStore";

type SubCategoriesMenu = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  allHref: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategoryData: GetCategoryList.Model;
};

const SubCategoriesMenu = ({
  selectedCategoryData,
  setSelectedCategory,
  setOpen,
  allHref,
}: SubCategoriesMenu) => {
  const { isRTL } = useI18nStore();
  const { normalizedBrands } = useBrands();
  const { displayName, getBrandLink } = useBrandUtils();

  return (
    <nav className={subCategoriesNav}>
      <span className={navHeadingWrapper(false)}>
        {selectedCategoryData?.miniIcon ? (
          <Image
            src={selectedCategoryData?.miniIcon || ""}
            height={24}
            width={24}
            className={nav__heading_subcategory_icon}
            alt={
              isRTL
                ? selectedCategoryData?.arName || ""
                : selectedCategoryData?.name || ""
            }
          />
        ) : isRTL ? (
          <CatBrandNewMobilesArIcon className={nav__heading_subcategory_icon} />
        ) : (
          <CatBrandNewMobilesEnIcon className={nav__heading_subcategory_icon} />
        )}
        <h2 className={nav__heading_subcategory}>
          {isRTL ? selectedCategoryData?.arName : selectedCategoryData?.name}
        </h2>
      </span>

      <ul className={nav__categories_list} role="list">
        <li>
          {selectedCategoryData && (
            <Link
              aria-label={isRTL ? "الكل" : "All"}
              href={allHref}
              className={nav__categories_list_button_subcategory}
              onClick={() => {
                setOpen(false);
                setSelectedCategory("");
              }}
              role="listitem"
            >
              <span>{isRTL ? "الكل" : "All"}</span>
              <RightChevronIcon />
            </Link>
          )}
        </li>

        {/* @ts-ignore */}
        {getBrandsForCategory(
          selectedCategoryData?.id || "",
          normalizedBrands
        ).map((brand) => (
          <li
            key={brand.id}
            className={nav__categories_list_button_subcategory}
          >
            <Link
              aria-label={isRTL ? brand.arName : brand.name}
              href={getBrandLink(brand, selectedCategoryData)}
              onClick={() => {
                setOpen(false);
                setSelectedCategory("");
              }}
              className={subCatLinkStyles}
              role="listitem"
            >
              {displayName(brand)}
              <RightChevronIcon />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubCategoriesMenu;

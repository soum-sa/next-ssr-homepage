import {
  CatCarsIcon,
  CatLaptopIcon,
  CatCarPlatesIcon,
  CatHeadphoneIcon,
  CatCameresIcon,
  CatAccessoriesIcon,
  CatTabletsIcon,
  CatSpeakersIcon,
  CatRoutersIcon,
  CatGamingIcon,
  CatRealEstateIcon,
  CatPCPartsIcon,
  CatMonitorIcon,
  CatSmartwatchesIcon,
  CatDesktopIcon,
  CatPrinterIcon,
  CatMobileIcon,
  CatBrandNewMobilesEnIcon,
  CatBrandNewMobilesArIcon,
  CatSecurityDashCamerasicon,
} from "@src/styles/icons";

const CATEGORY_ICONS: Record<string, unknown> = {
  Cars: CatCarsIcon,
  Laptops: CatLaptopIcon,
  Mobiles: CatMobileIcon,
  Tablets: CatTabletsIcon,
  Gaming: CatGamingIcon,
  Cameras: CatCameresIcon,
  Monitors: CatMonitorIcon,
  Speakers: CatSpeakersIcon,
  Routers: CatRoutersIcon,
  Desktops: CatDesktopIcon,
  Headphones: CatHeadphoneIcon,
  Accessories: CatAccessoriesIcon,
  Smartwatches: CatSmartwatchesIcon,
  "PC Parts": CatPCPartsIcon,
  "Car Plates": CatCarPlatesIcon,
  "Real Estate": CatRealEstateIcon,
  "Home Appliances": CatRealEstateIcon,
  "Printers & Scanners": CatPrinterIcon,
  "Security & Dash Cameras": CatSecurityDashCamerasicon,
  brandNewAr: CatBrandNewMobilesArIcon,
  brandNewEn: CatBrandNewMobilesEnIcon,
};

// whenever admin adds new category, we default to `brandNewAr` and `brandNewEn` icons
const stableCategories = Object.keys(CATEGORY_ICONS).filter(
  (catg) => !["brandNewAr", "brandNewEn"].includes(catg)
);

export const getCategoryIcon = (catName: string) => (isRTL: boolean) =>
  stableCategories.includes(catName)
    ? CATEGORY_ICONS[catName]
    : isRTL
      ? CATEGORY_ICONS["brandNewAr"]
      : CATEGORY_ICONS["brandNewEn"];

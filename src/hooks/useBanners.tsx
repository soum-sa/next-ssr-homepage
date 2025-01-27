import { HomepageDataResponse } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";

export const useBanners = (
  banners: HomepageDataResponse["banners"],
  position: "upper" | "middle",
  type: "desktop" | "mobile"
) => {
  const { isRTL } = useI18nStore();

  const bannersEn = banners?.en.filter(
    (banner) =>
      banner.bannerPage === "seo" && banner.bannerPosition === position
  );

  const bannersAr = banners?.ar.filter(
    (banner) =>
      banner.bannerPage === "seo" && banner.bannerPosition === position
  );

  const filteredBanners = isRTL ? bannersAr : bannersEn;

  return type === "desktop"
    ? filteredBanners.filter((banner) => banner.bannerName.includes("$$$"))
    : filteredBanners.filter((banner) => !banner.bannerName.includes("$$$"));
};

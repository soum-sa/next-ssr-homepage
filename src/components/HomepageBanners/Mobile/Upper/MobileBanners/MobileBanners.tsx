"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { cx } from "@panda-styled-system/css";

import {
  useDotButton,
  CarouselDotButton,
} from "@src/components/CarouselDotButton";

import {
  mobileCarouselStyles,
  emblaStyles,
  emblaContainerStyles,
  mobileSlideStyles,
  mobileDotsStyles,
  mobileDotStyles,
  mobileDotSelectedStyles,
  mobileSingleImageContainerStyle,
} from "./MobileBanners.styled";
import { MobileUpperBannerImage } from "./MobileUpperBannerImage";
import { HomepageDataResponse } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { useBanners } from "@src/hooks/useBanners";

export const MobileBanners = ({
  banners,
}: {
  banners: HomepageDataResponse["banners"];
}) => {
  const { isRTL } = useI18nStore();
  const seo = useTranslations("seo");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
    direction: isRTL ? "rtl" : "ltr",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const usedBanners = useBanners(banners, "upper", "mobile");

  if (usedBanners?.length === 0) {
    return null;
  }

  if (usedBanners?.length === 1) {
    return (
      <div className={mobileSingleImageContainerStyle}>
        <MobileUpperBannerImage
          banner={usedBanners[0]}
          type="single"
          index={0}
        />
      </div>
    );
  }

  return (
    <div className={mobileCarouselStyles}>
      <div className={emblaStyles} ref={emblaRef}>
        <div
          className={emblaContainerStyles}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {usedBanners?.map((banner, index) => (
            <div className={mobileSlideStyles} key={banner.id}>
              <MobileUpperBannerImage
                banner={banner}
                index={index}
                type="multiple"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={mobileDotsStyles}>
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cx(
              mobileDotStyles,
              index === selectedIndex ? mobileDotSelectedStyles : ""
            )}
            aria-label={seo("viewBanners")}
          />
        ))}
      </div>
    </div>
  );
};

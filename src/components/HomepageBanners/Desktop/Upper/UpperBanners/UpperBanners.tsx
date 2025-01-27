"use client";

import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";

import {
  useDotButton,
  CarouselDotButton,
} from "@src/components/CarouselDotButton";
import {
  carouselContainerStyle,
  carouselStyle,
  dotsContainerStyle,
  dotSelectedStyle,
  dotStyle,
  emblaContainerStyle,
  emblaSlideStyle,
  emblaStyle,
} from "./UpperBanners.styled";
import { UpperBannerImage } from "./UpperBannerImage";
import { useBanners } from "@src/hooks/useBanners";
import { HomepageDataResponse } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";

export function UpperBanners({
  banners,
}: {
  banners: HomepageDataResponse["banners"];
}) {
  const seo = useTranslations("seo");
  const { isRTL } = useI18nStore();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    direction: isRTL ? "rtl" : "ltr",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const usedBanners = useBanners(banners, "upper", "desktop");
  if (usedBanners?.length === 0) {
    return null;
  }

  return (
    <div className={carouselContainerStyle}>
      <div className={carouselStyle}>
        <div className={emblaStyle} ref={emblaRef}>
          <div className={emblaContainerStyle}>
            {usedBanners?.map((banner, index) => (
              <div className={emblaSlideStyle} key={index}>
                <UpperBannerImage banner={banner} priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={dotsContainerStyle}>
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`${dotStyle} ${index === selectedIndex ? dotSelectedStyle : ""}`}
            aria-label={seo("viewBanners")}
          />
        ))}
      </div>
    </div>
  );
}

export default UpperBanners;

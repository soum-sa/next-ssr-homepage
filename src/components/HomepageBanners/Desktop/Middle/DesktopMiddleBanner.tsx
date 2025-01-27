"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";

import {
  useDotButton,
  CarouselDotButton,
} from "@src/components/CarouselDotButton";
import { useBanners } from "@src/hooks/useBanners";
import {
  carouselStyle,
  dotsContainerStyle,
  dotSelectedStyle,
  dotStyle,
  emblaContainerStyle,
  emblaSlideStyle,
  emblaStyle,
} from "../Upper/UpperBanners/UpperBanners.styled";
import { DesktopMiddleBannerImage } from "./DesktopMiddleBannerImage";
import { HomepageDataResponse } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";

export const DesktopMiddleBanner = ({
  banners,
}: {
  banners: HomepageDataResponse["banners"];
}) => {
  const { isRTL } = useI18nStore();
  const seo = useTranslations("seo");

  const usedBanners = useBanners(banners, "middle", "desktop");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
    direction: isRTL ? "rtl" : "ltr",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  if (usedBanners?.length === 0) {
    return null;
  }

  return (
    <InView as="div" style={{ marginBlock: "2.05rem" }}>
      <div className={carouselStyle}>
        <div className={emblaStyle} ref={emblaRef}>
          <div className={emblaContainerStyle}>
            {usedBanners?.map((banner) => (
              <div className={emblaSlideStyle} key={banner.id}>
                <DesktopMiddleBannerImage banner={banner} />
              </div>
            ))}
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
    </InView>
  );
};

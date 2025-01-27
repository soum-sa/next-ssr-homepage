"use client";

import { cx } from "@panda-styled-system/css";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";

import {
  CarouselDotButton,
  useDotButton,
} from "@src/components/CarouselDotButton";
import {
  emblaContainerStyles,
  emblaStyles,
  mobileDotSelectedStyles,
  mobileDotsStyles,
  mobileDotStyles,
  mobileMiddleSingleImageStyles,
  mobileMiddleSlideStyles,
  mobileSlideStyles,
} from "../Upper/MobileBanners/MobileBanners.styled";
import { MobileMiddleBannerImage } from "./MobileMiddleBannerImage";
import { useBanners } from "@src/hooks/useBanners";
import { HomepageDataResponse } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";

export const MobileMiddleBanner = ({
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

  const usedBanners = useBanners(banners, "middle", "mobile");

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  if (!banners.ar?.length && !banners.en?.length) {
    return null;
  }

  if (usedBanners?.length === 0) {
    return null;
  }

  if (usedBanners?.length === 1) {
    return (
      <InView as="div" className={mobileMiddleSingleImageStyles}>
        <MobileMiddleBannerImage banner={usedBanners[0]} />
      </InView>
    );
  }

  return (
    <InView
      as="div"
      style={{
        marginInline: "auto",
        maxInlineSize: "24.875rem",
        maxBlockSize: "19.375rem",
      }}
    >
      <div className={emblaStyles} ref={emblaRef}>
        <div
          className={emblaContainerStyles}
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {usedBanners?.map((banner) => (
            <div
              className={cx(mobileSlideStyles, mobileMiddleSlideStyles)}
              key={banner.id}
            >
              <MobileMiddleBannerImage banner={banner} />
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
              index === selectedIndex && mobileDotSelectedStyles
            )}
            aria-label={seo("viewBanners")}
          />
        ))}
      </div>
    </InView>
  );
};

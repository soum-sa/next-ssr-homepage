"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import isEmpty from "lodash.isempty";
import useEmblaCarousel from "embla-carousel-react";

import { cx } from "@panda-styled-system/css";
import { useI18nStore } from "@soum-web/data";
import { appBoundary } from "@src/styles/icons";
import { PaddingBox } from "@ui/components/Home/HeroBanner.styled";
import { DesktopModelCard } from "@src/components/Product/ModelCard/Desktop";
import useIsMobile from "@src/components/Checkout/hooks/useIsMobile";
import { HomepageDataResponse } from "@data-interface/contracts";

import { ArrowButton } from "./ArrowButton";
import {
  embla,
  emblaContainer,
  emblaSlide,
  desktopMostSoldDevicesCollectionContainer,
  desktopMostSoldDevicesCollectionTitleStyle,
  iconStyle,
  leftArrowButtonStyle,
  rightArrowButtonStyle,
  innerContainerStyle,
  headerContainerStyle,
  titleContainerStyle,
  arrowContainerStyles,
  innerContainer,
} from "./DesktopMostSoldDevicesCollection.styled";

type DesktopMostDevicesSoldCollectionProps = {
  products: HomepageDataResponse["mostSoldModels"];
};

export function DesktopMostSoldDevicesCollection({
  products,
}: DesktopMostDevicesSoldCollectionProps) {
  const { isRTL } = useI18nStore();

  const t = useTranslations("collectionArrows");
  const mostSoldDevicesCollectionTranslations = useTranslations(
    "mostSoldDevicesCollection"
  );
  const isMobile = useIsMobile();
  const title = useMemo(
    () =>
      mostSoldDevicesCollectionTranslations.rich(
        "desktop.MostSoldDevicesCollectionTitle",
        {
          highlight: (chunks) => <span>{chunks}</span>,
        }
      ),
    [mostSoldDevicesCollectionTranslations]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
    direction: isRTL ? "rtl" : "ltr",
    align: "center",
    breakpoints: {
      "(min-inline-size: 768px)": { align: "start" },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    // Initial check
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      if (!isMobile) {
        emblaApi.scrollTo(emblaApi.selectedScrollSnap() - 4);
      } else {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi, isMobile]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      if (!isMobile) {
        emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 4);
      } else {
        emblaApi.scrollNext();
      }
    }
  }, [emblaApi, isMobile]);

  if (isEmpty(products)) return null;

  return (
    <div className={headerContainerStyle}>
      <div className={cx(appBoundary, PaddingBox, innerContainerStyle)}>
        <div className={desktopMostSoldDevicesCollectionContainer}>
          <div className={innerContainer}>
            <div className={titleContainerStyle}>
              <h2 className={desktopMostSoldDevicesCollectionTitleStyle}>
                {title}
              </h2>
              <div className={arrowContainerStyles}>
                <ArrowButton
                  buttonClass={cx(leftArrowButtonStyle)}
                  iconClass={iconStyle}
                  handleClick={scrollPrev}
                  ariaLabel={
                    isRTL
                      ? t("rightIconButton.buttonText")
                      : t("leftIconButton.buttonText")
                  }
                  disabled={!canScrollPrev}
                />
                <ArrowButton
                  buttonClass={cx(rightArrowButtonStyle)}
                  iconClass={iconStyle}
                  handleClick={scrollNext}
                  ariaLabel={
                    isRTL
                      ? t("leftIconButton.buttonText")
                      : t("rightIconButton.buttonText")
                  }
                  disabled={!canScrollNext}
                />
              </div>
            </div>
            <div className={`embla ${embla}`} ref={emblaRef}>
              <div className={emblaContainer}>
                {products.map((product) => (
                  <InView as="div" key={product.id} className={emblaSlide}>
                    <DesktopModelCard
                      id={product.id}
                      arName={product.arName}
                      enName={product.enName}
                      modelIcon={product.modelIcon}
                    />
                  </InView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

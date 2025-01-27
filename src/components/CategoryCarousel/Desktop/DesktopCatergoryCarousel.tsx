"use client";

import { useEffect, useCallback, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { css } from "@panda-styled-system/css";

import { LeftArrowIcon } from "@src/styles/icons";

import {
  carouselHeaderStyle,
  carouselWrapperStyle,
  emblaStyle,
  emblaContainerStyle,
} from "./DesktopCatergoryCarousel.styled";
import DesktopCategory from "./DesktopCategory";
import { buttonStyle, iconStyle } from "./DesktopCatergoryCarousel.styled";
import { getCategoryIcon } from "../icons";
import { useCategoryUtils } from "@src/hooks/useCategoryUtils";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { getCategoryFromGetCategoryListModel } from "@src/infra/helpers/utils";

const DesktopCategoryCarousel = () => {
  const categories: unknown[] = [];
  const [showStartArrow, setShowStartArrow] = useState(false);
  const [showEndArrow, setShowEndArrow] = useState(true);
  const params = useParams();
  const categoryName = params?.categoryName as string | undefined;
  const { isRTL } = useI18nStore();
  const seoTranslations = useTranslations("seo");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: false,
    align: "center",
    containScroll: "trimSnaps",
    direction: isRTL ? "rtl" : "ltr",
    dragFree: true,
    breakpoints: {
      "(min-width: 768px)": { active: true },
    },
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const { getCategoryLink } = useCategoryUtils();

  const activeCategory = getCategoryFromGetCategoryListModel(
    categories,
    categoryName ?? ""
  );

  useEffect(() => {
    emblaApi?.on("slidesInView", (arg) => {
      const length = categories.length;
      const slides = arg.slidesNotInView();
      if (slides.includes(0)) {
        setShowStartArrow(true);
      } else {
        setShowStartArrow(false);
      }
      if (slides.includes(length - 1)) {
        setShowEndArrow(true);
      } else {
        setShowEndArrow(false);
      }
    });
  }, [categories.length, emblaApi]);

  return (
    <div className={carouselHeaderStyle}>
      <div className={carouselWrapperStyle}>
        <button
          className={css(buttonStyle, {
            marginInlineEnd: 2,
            _rtl: { transform: "rotate(-180deg)" },
          })}
          style={{
            opacity: showStartArrow ? 1 : 0,
          }}
          onClick={scrollPrev}
          role="button"
          aria-label={
            isRTL
              ? seoTranslations("rightIconButton.buttonText")
              : seoTranslations("leftIconButton.buttonText")
          }
        >
          <LeftArrowIcon
            role="img"
            className={iconStyle}
            aria-label={
              isRTL
                ? seoTranslations("rightIconButton.buttonText")
                : seoTranslations("leftIconButton.buttonText")
            }
          />
        </button>

        <div className={emblaStyle} ref={emblaRef}>
          <div className={emblaContainerStyle}>
            {categories.map((category) => {
              const isCategoryActive = activeCategory?.id === category.id;

              return (
                <DesktopCategory
                  key={category.id}
                  category={category}
                  href={getCategoryLink(category)}
                  isSelected={isCategoryActive}
                  isRTL={isRTL}
                  Icon={getCategoryIcon(category.name)(isRTL)}
                />
              );
            })}
          </div>
        </div>

        <button
          className={css(buttonStyle, {
            marginInlineStart: 2,
            transform: "rotate(180deg)",
            _rtl: {
              transform: "rotate(0deg)",
            },
          })}
          style={{
            opacity: showEndArrow ? 1 : 0,
          }}
          onClick={scrollNext}
          role="button"
          aria-label={
            isRTL
              ? seoTranslations("leftIconButton.buttonText")
              : seoTranslations("rightIconButton.buttonText")
          }
        >
          <LeftArrowIcon
            role="img"
            className={iconStyle}
            aria-label={
              isRTL
                ? seoTranslations("leftIconButton.buttonText")
                : seoTranslations("rightIconButton.buttonText")
            }
          />
        </button>
      </div>
    </div>
  );
};

export default DesktopCategoryCarousel;

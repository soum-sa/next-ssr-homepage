"use client";

import dynamic from "next/dynamic";
import useEmblaCarousel from "embla-carousel-react";
import { cx, css } from "@panda-styled-system/css";
import { useTranslations } from "next-intl";
import testimonialsData from "./testimonials.json";

import {
  testimonalsContainerStyles,
  testimonalsTitleStyles,
  emblaStyles,
  emblaContainerStyles,
  emblaSlideStyles,
} from "./Testimonials.styled";
import { useDotButton } from "../CarouselDotButton";
import { emblaDotStyles, emblaDotsStyles } from "./CarouselDotButton.styled";
import { useI18nStore } from "@src/i18n/useI18nStore";
const TestimonialCard = dynamic(() => import("./TestimonialCard"), {
  ssr: false,
});
const DotButton = dynamic(
  () => import("./CarouselDotButton").then((mod) => mod.DotButton),
  { ssr: false }
);

function Testimonials() {
  const { isRTL } = useI18nStore();
  const t = useTranslations("testimonials");
  const seo = useTranslations("seo");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRTL ? "rtl" : "ltr",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const getAriaLabel = (index: number) => {
    return isRTL ? `زر النقطة ${index + 1}` : `Dot button ${index + 1}`;
  };

  return (
    <div className={testimonalsContainerStyles}>
      <h2 className={testimonalsTitleStyles}>{t("sectionTitle")}</h2>
      <div className={cx("embla", emblaStyles)} ref={emblaRef}>
        <div className={emblaContainerStyles}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={emblaSlideStyles}>
              <TestimonialCard data={testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className={emblaDotsStyles}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            ariaLabel={getAriaLabel(index)}
            onClick={() => onDotButtonClick(index)}
            className={cx(
              emblaDotStyles,
              selectedIndex === index
                ? css({ backgroundColor: "secondary" })
                : css({ backgroundColor: "#75777F", opacity: 0.5 })
            )}
            aria-label={seo("viewReviews")}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

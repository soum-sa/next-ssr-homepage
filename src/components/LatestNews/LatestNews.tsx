"use client";

import { useEffect, useCallback, memo } from "react";
import { useTranslations } from "next-intl";
import { css, cx } from "@panda-styled-system/css";
import useEmblaCarousel from "embla-carousel-react";

import { CarouselDotButton, useDotButton } from "../CarouselDotButton";

import {
  emblaContainerStyles,
  emblaStyles,
  latestNewsContainerStyles,
  sectionTitleStyles,
} from "./LatestNews.styled";
import { NewsCard } from "./NewsCard";
import latestNews from "./latestNews.json";
import { InView } from "react-intersection-observer";
import { useI18nStore } from "@src/i18n/useI18nStore";

const MemoizedNewsCard = memo(NewsCard);

export type NewsType = {
  imageURL: string;
  title: string;
  briefSummary: string;
  fullNewsURL: string;
};

const ARTICLES: NewsType[] = latestNews;

function LatestNews() {
  const { isRTL } = useI18nStore();
  const t = useTranslations("latestNews");
  const seo = useTranslations("seo");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: isRTL ? "rtl" : "ltr",
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  const renderNewsCards = useCallback(
    () =>
      ARTICLES.map((item, index) => (
        <MemoizedNewsCard
          data={item}
          key={item.title}
          dir={index === ARTICLES.length - 1 ? "rtl" : "ltr"}
        />
      )),
    []
  );

  return (
    <InView as="section" className={latestNewsContainerStyles}>
      <h2 className={sectionTitleStyles}>{t("sectionTitle")}</h2>
      <div className={`embla ${emblaStyles}`} ref={emblaRef}>
        <ul className={emblaContainerStyles}>{renderNewsCards()}</ul>
      </div>

      <div className={emblaDotsStyles}>
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cx(
              emblaDotStyles,
              selectedIndex === index
                ? css({ backgroundColor: "secondary" })
                : css({ backgroundColor: "natural" })
            )}
            aria-label={seo("latestOnSoum")}
          />
        ))}
      </div>
    </InView>
  );
}

export default LatestNews;

export const emblaDotsStyles = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
});

export const emblaDotStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  touchAction: "manipulation",
  appearance: "none",
  textDecoration: "none",
  cursor: "pointer",
  paddingBlock: 0,
  paddingInline: 0,
  marginBlock: 0,
  marginInline: 0,
  border: 0,
  inlineSize: 2,
  blockSize: 2,
});

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import { InView } from "react-intersection-observer";
import { css, cx } from "@panda-styled-system/css";
import useEmblaCarousel from "embla-carousel-react";
import isEmpty from "lodash.isempty";

import useIsMobile from "@src/components/Checkout/hooks/useIsMobile";

import { Link, usePathname } from "@src/i18n/routing";

import { ArrowButton } from "./ArrowButton";
import {
  buttonStyle,
  collection_container,
  embla,
  embla__container,
  embla__slide,
  feed_title,
  iconStyle,
  leftArrowButtonStyle,
  rightArrowButtonStyle,
  viewMoreText,
} from "./Collection.styled";
import {
  RECENTLY_SOLD_PRODUCT_COLLECTION,
  RECENTLY_VIEWED_PRODUCT_COLLECTION,
} from "../utils";

import { Feed } from "@src/contracts";
import { useI18nStore } from "@src/i18n/useI18nStore";
import {
  createSafeUrl,
  joinArabicAndEnglistStringsSafely,
} from "@src/infra/helpers/utils";
import { isEligibleForTenDaysGuarantee } from "@src/lib/utils";
import { ProductCard } from "@src/components/ProductCard";

export type CollectionProps = {
  feed: Feed;
  showViewMore?: boolean;
  usage?: "homepage" | "similarProducts";
};

export function Collection({
  feed,
  showViewMore = false,
  usage = "homepage",
}: CollectionProps) {
  const { isRTL } = useI18nStore();
  const t = useTranslations("collectionArrows");
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
    direction: isRTL ? "rtl" : "ltr",
    align: "center",
    breakpoints: {
      "(min-width: 768px)": { align: "start" },
    },
    watchDrag: isMobile,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [count, setCount] = useState(0);

  const hideRightArrow = useMemo(
    () => count >= Math.ceil(feed?.items?.length / 4) - 1,
    [count, feed?.items?.length]
  );
  const moreThanFiveProducts = useMemo(
    () => feed?.items?.length > 4,
    [feed?.items?.length]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      if (!isMobile) {
        emblaApi.scrollTo(emblaApi.selectedScrollSnap() - 4);
        setCount((prevState) => prevState - 1);
      } else {
        emblaApi.scrollPrev();
      }
    }
  }, [emblaApi, isMobile]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      if (!isMobile) {
        emblaApi.scrollTo(emblaApi.selectedScrollSnap() + 4);
        setCount((prevState) => prevState + 1);
      } else {
        emblaApi.scrollNext();
      }
    }
  }, [emblaApi, isMobile]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const feedTitle = isRTL ? feed.arName : feed.enName;
  const viewMoreLink = useMemo(
    () =>
      `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([feedTitle, feed.id]))}`,
    [feedTitle, feed.id]
  );

  if (isEmpty(feed)) return null;

  const isRecentlyViewedCollection =
    feed.id === RECENTLY_VIEWED_PRODUCT_COLLECTION.id;
  const isRecentlySoldCollection =
    feed.id === RECENTLY_SOLD_PRODUCT_COLLECTION.id;

  const shouldShowSellStatus =
    isRecentlyViewedCollection || isRecentlySoldCollection;
  const shouldShowSellDate = isRecentlyViewedCollection;

  return (
    <div className={collection_container}>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <h2 className={feed_title}>{feedTitle}</h2>
        {showViewMore && moreThanFiveProducts && (
          <Link href={viewMoreLink} aria-label={t("viewMore")}>
            <p className={viewMoreText}>{t("viewMore")}</p>
          </Link>
        )}
      </div>
      <div className={`embla ${embla}`} ref={emblaRef}>
        <div className={embla__container}>
          {feed.items.map((product) => {
            const showTenDaysGuaranteeTag = isEligibleForTenDaysGuarantee({
              isMerchant: product?.isMerchant,
              categoryName:
                usage === "homepage"
                  ? product?.category?.name
                  : product?.categoryName,
              isHomePage: usage === "homepage",
            });

            return (
              <InView
                as="div"
                key={product.productId}
                className={embla__slide(pathname === "/")}
              >
                <ProductCard
                  condition={product.condition}
                  productImage={product.productImage}
                  modelName={product.modelName}
                  arModelName={product.arModelName}
                  sellPrice={product.sellPrice}
                  originalPrice={product.originalPrice}
                  productId={product.productId}
                  discount={product.discount}
                  attributes={product.attributes}
                  productImages={
                    product?.productImages || product?.product_images || []
                  }
                  tags={product.tags}
                  sellStatus={
                    shouldShowSellStatus ? product.sellStatus : undefined
                  }
                  sellDate={shouldShowSellDate ? product.sellDate : undefined}
                  variantName={product.variantName}
                  categoryName={product.categoryName}
                  isSlideble={!isMobile}
                  isHomepage={pathname === "/"}
                  usage={usage}
                  showTenDaysGuaranteeTag={showTenDaysGuaranteeTag}
                />
              </InView>
            );
          })}
        </div>
      </div>

      {count !== 0 && (
        <ArrowButton
          buttonClass={cx(buttonStyle, leftArrowButtonStyle)}
          disabled={!prevBtnEnabled}
          iconClass={iconStyle}
          handleClick={scrollPrev}
          ariaLabel={
            isRTL
              ? t("rightIconButton.buttonText")
              : t("leftIconButton.buttonText")
          }
        />
      )}
      {!hideRightArrow && (
        <ArrowButton
          buttonClass={cx(buttonStyle, rightArrowButtonStyle)}
          disabled={!nextBtnEnabled}
          iconClass={iconStyle}
          handleClick={scrollNext}
          ariaLabel={
            isRTL
              ? t("leftIconButton.buttonText")
              : t("rightIconButton.buttonText")
          }
        />
      )}
    </div>
  );
}

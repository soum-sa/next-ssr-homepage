"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Link } from "@src/i18n/routing";

import { ProductCardImage } from "./ProductCardImage";
import {
  card_container,
  card_title,
  product_container,
  badge__container,
  price_container,
  sell_price,
  attribute_title,
  installment_options_container,
  bnpl_payment_icon,
  bnpl_payment_box,
  helper_text,
  sell_price_text,
  attributesStyle,
  guarantee_badge,
  badge_section,
  productDetailsContainer,
  cashBadgeStyles,
} from "./ProductCard.styled";
import { useI18nStore } from "@src/i18n/useI18nStore";

const maskedPrice = (value: string | number) => {
  const priceString = value.toString();
  const maskedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return maskedPrice;
};

type SellerCity = {
  sellerCityAr: string;
  sellerCityEn: string;
};

type ProductCondition = {
  name: string;
  nameAr: string;
  labelColor: string;
  textColor: string;
};
const HARD_CODED_MAX_GRAND_TOTAL_OF_TAMARA = 5000;
const PRODUCT_SOLD_STATUS = "Sold";

type Attribute = {
  title: { arName: string; enName: string };
  value: { arName: string; enName: string };
};

export type ProductCardProps = {
  categoryName?: string;
  originalPrice: number;
  modelName: string;
  arModelName: string;
  productId: string;
  sellPrice: number;
  productImage: string;
  discount?: number;
  attributes: Attribute[];
  condition?: ProductCondition;
  tags: string;
  sellStatus?: string;
  sellDate?: string;
  brandName?: string;
  variantName?: string;
  isSlideble?: boolean;
  isHomepage?: boolean;
  expressDeliveryBadge?: boolean;
  sellerCity?: SellerCity;
  showTenDaysGuaranteeTag?: boolean;
};

export function ProductCard(props: ProductCardProps) {
  const {
    condition,
    modelName,
    arModelName,
    sellPrice,
    attributes,
    tags,
    sellStatus,
    sellDate,
    categoryName,
    productImage,
    isHomepage = false,
    showTenDaysGuaranteeTag,
  } = props;

  const { isRTL } = useI18nStore();
  const t = useTranslations("collectionCard");
  const isProductSold = sellStatus === PRODUCT_SOLD_STATUS;

  const [timeSinceSold, setTimeSinceSold] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const cardTitle = isRTL ? arModelName : modelName;

  const formattedPrice = maskedPrice(sellPrice);

  let title = isRTL
    ? `سعر ${cardTitle} مستعمل ${formattedPrice} ${t("riyal")}`
    : `Used ${cardTitle} price ${formattedPrice} ${t("riyal")}`;

  if (
    categoryName?.toLowerCase() === "real estate" ||
    categoryName?.toLowerCase() === "brand new mobiles"
  ) {
    title = isRTL ? `سعر ${cardTitle}` : `${cardTitle} price`;
  }

  useEffect(() => {
    if (isProductSold && sellDate) {
      const sellDateTime = new Date(sellDate).getTime();

      const updateTime = () => {
        const now = Date.now();
        const diffMs = now - sellDateTime;
        const diffDays = diffMs / (1000 * 60 * 60 * 24);

        if (diffDays > 7) {
          setIsExpired(true);
        } else {
          setIsExpired(false);

          // Calculate time since sold
          const diffHours = diffMs / (1000 * 60 * 60);
          const diffMinutes = diffMs / (1000 * 60);

          let timeSinceSoldStr = "";

          if (diffDays >= 1) {
            timeSinceSoldStr = `${Math.floor(diffDays)} ${t("daysAgo")}`;
          } else if (diffHours >= 1) {
            timeSinceSoldStr = `${Math.floor(diffHours)} ${t("hoursAgo")}`;
          } else if (diffMinutes >= 1) {
            timeSinceSoldStr = `${Math.floor(diffMinutes)} ${t("minutesAgo")}`;
          } else {
            timeSinceSoldStr = t("justNow");
          }

          setTimeSinceSold(timeSinceSoldStr);
        }
      };

      updateTime();

      const intervalId = setInterval(updateTime, 60000); // Update every minute

      return () => clearInterval(intervalId);
    }
  }, [sellStatus, sellDate, t, isProductSold]);

  if (isProductSold && isExpired) {
    return null;
  }
  const url = "";

  return (
    <div className={card_container(isProductSold)}>
      <ProductCardImage
        key={productImage}
        productImageURL={productImage}
        tags={tags}
        cardTitle={cardTitle}
        isProductSold={isProductSold}
        timeSinceSold={timeSinceSold}
        isHomepage={isHomepage}
        showTenDaysGuaranteeTag={showTenDaysGuaranteeTag}
      />
      {/* Product Details */}
      <Link
        href={url}
        title={title}
        className={productDetailsContainer(isProductSold)}
      >
        <div className={product_container(isProductSold)}>
          <h3 className={card_title(isProductSold, isHomepage)}>
            {cardTitle}
            <span className={cashBadgeStyles}>{t("cash")}</span>
          </h3>
          {attributes?.length > 0 && (
            <h4 className={attributesStyle}>
              {attributes?.map((attr, index) => (
                <span
                  key={index + 1}
                  className={attribute_title(isProductSold)}
                >
                  {isRTL ? attr.value.arName : attr.value.enName}
                  {index < attributes.length - 1 ? "," : ""}{" "}
                </span>
              ))}
            </h4>
          )}

          <div className={installment_options_container}>
            <h2 className={price_container}>
              <span className={sell_price}>{formattedPrice}</span>
              <span className={sell_price_text}>{t("riyal")}</span>
            </h2>
            {sellPrice < HARD_CODED_MAX_GRAND_TOTAL_OF_TAMARA && (
              <h2 className={bnpl_payment_box}>
                {isRTL && <span>{t("installment")}</span>}
                <span>{Number(sellPrice / 4).toFixed(2)} </span>
                <span>{t("currency")}</span>
                <span> / </span>
                <span>{t("month")}</span>
                <span className={helper_text}> {t("with")}</span>
                <>
                  <span
                    className={bnpl_payment_icon}
                    style={{ backgroundImage: "url(/images/Tabby.png)" }}
                  />
                  <span
                    className={bnpl_payment_icon}
                    style={{
                      backgroundImage: isRTL
                        ? "url(/images/ARtamara.png)"
                        : "url(/images/ENtamara.png)",
                    }}
                  />
                </>
              </h2>
            )}
          </div>
          {(condition || showTenDaysGuaranteeTag) && (
            <div className={badge_section}>
              {condition && (
                <h2
                  className={badge__container}
                  style={{
                    backgroundColor: condition.labelColor,
                    color: condition.textColor,
                  }}
                >
                  {isRTL ? condition.nameAr : condition.name}
                </h2>
              )}

              {showTenDaysGuaranteeTag && (
                <h2 className={guarantee_badge(isHomepage)}>
                  {t("tenDaysGuarantee")}
                </h2>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

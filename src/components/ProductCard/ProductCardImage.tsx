"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { TenDaysReturnBadge } from "@src/styles/icons";
import { SoldOutIcon } from "@src/styles/icons";

import {
  returnBadge,
  getImageOutlineStyles,
  overlay,
  soldOutStyles,
  timeSinceSoldStyles,
  emblaMobileSlideStyles,
  guaranteeTagStyle,
  badgeStyles,
} from "./ProductCardImage.styled";
import { getCloudImgSrc } from "@src/infra/helpers/utils/getCloudImgSrc";
import { BLUR_DATA_URL } from "@src/constants";
import { useI18nStore } from "@src/i18n/useI18nStore";
import { useMppImagePresets, useCloudImage } from "@src/infra/helpers/hooks";

type ProductCardImageProps = {
  productImageURL: string;
  tags: string;
  isProductSold: boolean;
  cardTitle: string;
  timeSinceSold: string;
  isHomepage?: boolean;
  priority?: boolean;
  showTenDaysGuaranteeTag?: boolean;
};

export function ProductCardImage({
  productImageURL,
  cardTitle,
  isProductSold,
  timeSinceSold,
  isHomepage = false,
  showTenDaysGuaranteeTag,
}: ProductCardImageProps) {
  const t = useTranslations("collectionCard");
  const { isRTL } = useI18nStore();

  const cloudImgSrc = getCloudImgSrc(
    productImageURL || "",
    useMppImagePresets()
  );
  const { src, onError } = useCloudImage({
    src: cloudImgSrc,
    altSrc: productImageURL || "",
  });

  return (
    <figure
      className={emblaMobileSlideStyles(isHomepage)}
      key={productImageURL}
    >
      <Image
        onError={onError}
        blurDataURL={BLUR_DATA_URL}
        placeholder="blur"
        className={getImageOutlineStyles(
          showTenDaysGuaranteeTag as boolean,
          isHomepage
        )}
        unoptimized
        src={src}
        width={300}
        height={300}
        alt={cardTitle}
      />
      {isProductSold && (
        <div className={overlay}>
          <div className={soldOutStyles}>
            <SoldOutIcon />
            <h4>{t("soldOut")}</h4>
            <h4 className={timeSinceSoldStyles}>{timeSinceSold}</h4>
          </div>
        </div>
      )}
      {showTenDaysGuaranteeTag && (
        <div className={guaranteeTagStyle(isHomepage)}>
          <div className={returnBadge(isRTL)}>
            <TenDaysReturnBadge isAr={isRTL} className={badgeStyles} />
          </div>
        </div>
      )}
    </figure>
  );
}

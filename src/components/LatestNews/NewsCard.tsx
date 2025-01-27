import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  newsCardStyles,
  newsCardBodyStyles,
  cardImageStyles,
  cardTitleStyles,
  cardSummaryStyles,
  cardButtonStyles,
} from "./NewsCard.styled";
import { NewsType } from "./LatestNews";
import Link from "next/link";
import { BLUR_DATA_URL } from "@src/constants";

export function NewsCard({
  data,
  dir,
}: {
  data: NewsType;
  dir: "rtl" | "ltr";
}) {
  const t = useTranslations("latestNews");
  const seo = useTranslations("seo");

  return (
    <li className={newsCardStyles} key={data.title}>
      <div className={newsCardBodyStyles}>
        <figure className={cardImageStyles}>
          <Image
            blurDataURL={BLUR_DATA_URL}
            placeholder="blur"
            src={data.imageURL}
            alt={data.title}
            fill
            unoptimized
            loading="lazy"
            style={{ borderRadius: 3, objectFit: "cover" }}
          />
        </figure>
        <h3
          dir={dir}
          className={cardTitleStyles}
          aria-label={seo("findOutMoreAboutUs")}
        >
          {data.title}
        </h3>
        <p dir={dir} className={cardSummaryStyles}>
          {data.briefSummary}
        </p>
        <Link
          className={cardButtonStyles}
          href={data.fullNewsURL}
          target="_blank"
          rel="noreferrer"
          aria-label={data.title}
        >
          {t("buttonText")}
        </Link>
      </div>
    </li>
  );
}

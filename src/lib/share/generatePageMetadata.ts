import {
  LOCALE,
  LOCALES,
} from "@src/infra/helpers/middleware/withLocale.types";
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export type Translation = Record<LOCALE, string>;

export type GeneratePageMetadataOptions = {
  title: Translation;
  description: Translation;
  keywords?: Translation;
  locale: LOCALE;
  pathname: string | Translation;
  index: boolean;
  images?: OpenGraph["images"];
  blog?: {
    type: "article";
    publishedTime?: string;
    modifiedTime?: string;
    expirationTime?: string;
    authors?: null | string | URL | Array<string | URL>;
    section?: null | string;
    tags?: null | string | Array<string>;
  };
  authors?: Metadata["authors"];
};

export const generatePageMetadata = ({
  title,
  description,
  keywords,
  locale,
  pathname,
  index,
  images,
  blog,
  authors,
}: GeneratePageMetadataOptions): Metadata => {
  const alternates = generateAlternativeLinks(pathname, locale);
  const defaultKeywords: Translation = {
    en: "Soum Saudi Arabia, second-hand marketplace, buy used items online, sell used products, pre-owned electronics, used furniture, second-hand fashion, home appliances Saudi, zero-interest installment payments, cash on delivery, Soum warranty, 10-day return policy, buy now pay later, sustainable shopping, Soum app, pre-loved items, refurbished devices, used smartphones, Soum Saudi delivery, second-hand luxury items, affordable shopping Saudi, customer protection, installment shopping Saudi, Soum customer service, Buy with Tabby and Tamara",
    ar: "سوم السعودية, بيع وشراء المستعمل, سوق المستعمل, أجهزة إلكترونية مستعملة, أثاث مستعمل, أزياء مستعملة, أجهزة منزلية, تقسيط بدون فوائد, الدفع عند الاستلام, ضمان سوم, سياسة الإرجاع, طرق الدفع سوم, اشتر الآن وادفع لاحقًا, هواتف مستعملة, تسوق مستدام, منتجات مجددة, منتجات فاخرة مستعملة, تقسيط سوم, تطبيق سوم, حماية العملاء, خطط التقسيط, توصيل سوم, تسوق مستعمل بأسعار معقولة, إعادة بيع التكنولوجيا, أجهزة ألعاب مستعملة",
  };

  return {
    title: title[locale],
    description: description[locale],
    keywords: (keywords ?? defaultKeywords)[locale],
    robots:
      ["https://soum.sa", "https://www.soum.sa"].includes(
        process.env.NEXT_PUBLIC_CLIENT_BASE_URL!
      ) && index
        ? "index, follow"
        : "noindex, nofollow",
    alternates,
    authors: authors ?? [
      {
        name: locale === "ar" ? "سـوم" : "Soum",
      },
    ],
    openGraph: {
      type: blog ? "article" : "website",
      title: title[locale],
      description: description[locale],
      images: images,
      url: alternates?.canonical as string,
      locale,
      alternateLocale: Object.values(LOCALES),
      ...(blog && { ...blog }),
    },
    twitter: {
      card: "app",
      site: "@Soum_online",
      creator: "@Soum_online",
      title: title[locale],
      description: description[locale],
      images: images,
      app: {
        id: {
          iphone: "1580930409",
          ipad: "1580930409",
          googleplay: "com.soum.sa",
        },
        url: {
          iphone:
            "https://apps.apple.com/sa/app/soum-%D8%B3%D9%80%D9%88%D9%85/id1580930409",
          ipad: "https://apps.apple.com/sa/app/soum-%D8%B3%D9%80%D9%88%D9%85/id1580930409",
          googleplay:
            "https://play.google.com/store/apps/details?id=com.soum.sa",
        },
        name: "Soum | سـوم",
      },
    },
  };
};

export const generateAlternativeLinks = (
  pathname: string | Translation,
  locale: keyof Translation
): Metadata["alternates"] => {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;
  if (typeof pathname === "string") {
    return {
      canonical: `${baseUrl}/${locale}${pathname}`,
    };
  }

  return {
    canonical: `${baseUrl}/${locale}${pathname[locale]}`,
  };
};

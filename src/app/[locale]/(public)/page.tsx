import { Metadata } from "next";
import { userAgent } from "next/server";
import dynamicLoading from "next/dynamic";
import { headers } from "next/headers";
import { unstable_setRequestLocale } from "next-intl/server";

import { HomeCollections } from "@src/components/HomeCollections";
import { newsArticleSchema } from "@src/components/LatestNews";
import { reviewSchema } from "@src/components/Testimonials";
import DesktopHomepageUpperBanners from "@src/components/HomepageBanners/Desktop/Upper/DesktopHomepageUpperBanners";
import MobileHomepageUpperBanners from "@src/components/HomepageBanners/Mobile/Upper/MobileHomepageUpperBanners";
import { generatePageMetadata } from "@src/lib/share/generatePageMetadata";
import { SoumValues } from "@src/components/SoumValues";
import { getHomepageData } from "@src/services/homepage";
import { LOCALE } from "@src/infra/helpers/middleware/withLocale.types";

const LatestNews = dynamicLoading(
  () => import("@src/components/LatestNews/LatestNews"),
  { ssr: false }
);
const Testimonials = dynamicLoading(
  () => import("@src/components/Testimonials/Testimonials"),
  { ssr: false }
);

interface HomePageProps {
  params: {
    locale: LOCALE;
  };
}

export function generateMetadata({ params }: HomePageProps): Metadata {
  return generatePageMetadata({
    title: {
      en: "Soum Saudi Arabia - The best platform to sell and buy second-hand items with 10 days return and installment with 0 interest",
      ar: "سوم السعودية - افضل منصة لبيع وشراء المستعمل مع 10 ايام ضمان وتقسيط بدون فوائد",
    },
    description: {
      en: "Buy and sell mobiles, iPhones, laptops, iPads, or even cars. Soum guarantees your rights and delivers to your doorstep. Installments with Tabby and Tamara",
      ar: "بيع واشتري جوالات، ايفون، لابتوبات، ايبادات او حتى سيارات، سوم تضمن لك حقك وتوصلك لين باب البيت، تقسيط مع تابي وتمارا",
    },
    locale: params.locale,
    index: true,
    pathname: "/",
  });
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  const userAgentObj = userAgent({ headers: headers() });
  const homepageData = await getHomepageData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />

      <SoumValues />
      {/* {userAgentObj?.device?.type === "mobile" ? (
        <MobileHomepageUpperBanners banners={homepageData.banners} />
      ) : (
        <DesktopHomepageUpperBanners banners={homepageData.banners} />
      )} */}

      {/* <HomeCollections
        homepageData={homepageData}
        recommendedProductsTypesense={[]}
      /> */}
      <Testimonials />
      <LatestNews />
    </>
  );
}

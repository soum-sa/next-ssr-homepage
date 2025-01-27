"use client";

import isEmpty from "lodash.isempty";
// import { InView } from "react-intersection-observer";

import { HomepageDataResponse } from "@data-interface/contracts";

import { MobileMiddleBanner } from "@src/components/HomepageBanners/Mobile/Middle";
import { DesktopMiddleBanner } from "@src/components/HomepageBanners/Desktop/Middle";
import { MediaQueryWrapper } from "@src/styles/components";

import { Collection } from "./Collection/Collection";
import { DesktopMostSoldDevicesCollection } from "./MostSoldDevicesCollection/Desktop/DesktopMostSoldDevicesCollection";
import { MobileMostSoldDevicesCollection } from "./MostSoldDevicesCollection/Mobile/MobileMostSoldDevicesCollection";

import { collections_container } from "./Collections.styled";

export function Collections({
  homepageData,
}: {
  homepageData: HomepageDataResponse;
}) {
  if (isEmpty(homepageData?.feeds)) return null;

  return (
    <div className={collections_container}>
      <MediaQueryWrapper
        mobile={
          <MobileMostSoldDevicesCollection
            products={homepageData?.mostSoldModels}
          />
        }
        tablet={
          <DesktopMostSoldDevicesCollection
            products={homepageData?.mostSoldModels}
          />
        }
      />

      <MediaQueryWrapper
        mobile={<MobileMiddleBanner banners={homepageData.banners} />}
        tablet={<DesktopMiddleBanner banners={homepageData.banners} />}
      />

      {homepageData.feeds.slice(1).map((feed) => (
        <Collection feed={feed} showViewMore={true} key={feed.id} />
      ))}
    </div>
  );
}

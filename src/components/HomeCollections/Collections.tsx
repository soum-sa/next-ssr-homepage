"use client";

import isEmpty from "lodash.isempty";
import { InView } from "react-intersection-observer";

import { MobileMiddleBanner } from "@src/components/HomepageBanners/Mobile/Middle";
import { DesktopMiddleBanner } from "@src/components/HomepageBanners/Desktop/Middle";
import { MediaQueryWrapper } from "@src/styles/components";

import { Collection } from "./Collection/Collection";

import { collections_container } from "./Collections.styled";
import { HomepageDataResponse } from "@src/contracts";

export function Collections({
  homepageData,
}: {
  homepageData: HomepageDataResponse;
}) {
  if (isEmpty(homepageData?.feeds)) return null;
  console.log("homepageData", homepageData);
  return (
    <div className={collections_container}>
      <MediaQueryWrapper
        mobile={<MobileMiddleBanner banners={homepageData.banners} />}
        tablet={<DesktopMiddleBanner banners={homepageData.banners} />}
      />

      {homepageData.feeds.slice(1).map((feed) => (
        <InView key={feed.id}>
          <Collection feed={feed} showViewMore={true} />
        </InView>
      ))}
    </div>
  );
}

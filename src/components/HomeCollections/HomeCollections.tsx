"use client";

import { HomepageDataResponse } from "@src/contracts";
import { Collections } from "./Collections";
import { CollectionSchemaType } from "@src/contracts/homepage";

export const RECENTLY_VIEWED_PRODUCT_COLLECTION = {
  id: "efb0301fe8a1f6df22987f89",
  enName: "Recently viewed",
  arName: "ما قمت بمشاهدته مؤخرًا",
  items: [],
};

export const RECOMMENDED_VIEWED_PRODUCT_COLLECTION = {
  id: "67611c5d08c6aeb825ec1e72",
  enName: "Recommended For You",
  arName: "اخترنا لك",
  items: [],
};

export function HomeCollections({
  homepageData,
}: {
  homepageData: HomepageDataResponse;
  recommendedProductsTypesense: CollectionSchemaType[];
}) {
  return <Collections homepageData={homepageData} />;
}

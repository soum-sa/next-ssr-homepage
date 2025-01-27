import {
  createSafeUrl,
  joinArabicAndEnglistStringsSafely,
} from "@src/infra/helpers/utils";

export const getCollectionURL = (title: string, id: string) =>
  `/collection/${createSafeUrl(joinArabicAndEnglistStringsSafely([title, id]))}`;

export const RECENTLY_VIEWED_PRODUCT_COLLECTION = {
  id: "efb0301fe8a1f6df22987f89",
  enName: "Recently viewed",
  arName: "ما قمت بمشاهدته مؤخرًا",
  items: [],
};

export const RECENTLY_SOLD_PRODUCT_COLLECTION = {
  id: "adcdfe6b597d6bb2dfe0f76b",
  enName: "Recently Sold Products",
  arName: "منتجات مباعة مؤخرًا",
  items: [],
};

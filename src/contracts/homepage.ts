import { z } from 'zod';

export const AttributeSchema = z.object({
  title: z.object({
    arName: z.string(),
    enName: z.string(),
  }),
  value: z.object({
    arName: z.string(),
    enName: z.string(),
  }),
});

export const ConditionSchema = z.object({
  name: z.string(),
  nameAr: z.string(),
  labelColor: z.string(),
  textColor: z.string(),
});

export const MostSoldModelSchema = z.object({
  id: z.string(),
  arName: z.string(),
  enName: z.string(),
  modelIcon: z.string(),
});

export const CollectionSchema = z.object({
  originalPrice: z.number(),
  discount: z.number().optional(),
  sellPrice: z.number(),
  productImage: z.string(),
  productId: z.string(),
  modelName: z.string(),
  arModelName: z.string(),
  variantName: z.string(),
  arVariantName: z.string(),
  attributes: z.array(AttributeSchema),
  condition: ConditionSchema.optional(),
  productImages: z.array(z.string()),
  tags: z.string(),
  sellStatus: z.string().optional(),
  sellDate: z.string().optional(),
  categoryName: z.string().optional(),
  product_images: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
  isMerchant: z.boolean().optional(),
  category: z.object({
    name: z.string(),
    nameAr: z.string(),
  }),
});

export const FeedSchema = z.object({
  id: z.string(),
  arName: z.string(),
  enName: z.string(),
  items: z.array(CollectionSchema),
});

export const CategorySchema = z.object({
  id: z.string(),
  _id: z.string(),
  categoryNameAr: z.string(),
  categoryName: z.string(),
  position: z.string(),
  type: z.string(),
  category_name_ar: z.string(),
  category_name: z.string(),
  mini_category_icon: z.string(),
});

export const BannerSchema = z.object({
  id: z.string(),
  position: z.string(),
  bannerName: z.string(),
  bannerImage: z.string(),
  bannerPage: z.string(),
  bannerPosition: z.string(),
  bannerType: z.string(),
  bannerValue: z.string(),
  lang: z.string(),
});

export const HomepageDataResponseSchema = z.object({
  categories: z.array(CategorySchema),
  banners: z.object({
    ar: z.array(BannerSchema),
    en: z.array(BannerSchema),
  }),
  feeds: z.array(FeedSchema),
  mostSoldModels: z.array(MostSoldModelSchema),
});

export const RecentlySoldProductsResponseSchema = z.object({
  status: z.string(),
  data: z.object({
    items: z.array(CollectionSchema),
    limit: z.number(),
    offset: z.number(),
    total: z.number(),
  }),
  code: z.number(),
});

export type HomepageDataResponse = z.infer<typeof HomepageDataResponseSchema>;
export type CollectionSchemaType = z.infer<typeof CollectionSchema>;
export type Banner = z.infer<typeof BannerSchema>;
export type Feed = z.infer<typeof FeedSchema>;
export type Collection = z.infer<typeof CollectionSchema>;
export type ProductCondition = z.infer<typeof ConditionSchema>;
export type MostSoldModel = z.infer<typeof MostSoldModelSchema>;
export type RecentlySoldProductsResponse = z.infer<typeof RecentlySoldProductsResponseSchema>;

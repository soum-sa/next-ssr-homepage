import { z } from "zod";

export const MerchantProfileResponseSchema = z.object({
  _id: z.string(),
  listings: z.object({
    sold_listings: z.number(),
    active_listings: z.number(),
    completed_sales: z.number(),
    purchased_products: z.number(),
  }),
  profilePic: z.string(),
  isMerchant: z.boolean(),
  createdDate: z.string(),
  name: z.string(),
});

export const SellerProfileDataResponseSchema = z.object({
  avatar: z.string(),
  bio: z.string(),
  durationAr: z.string(),
  durationEn: z.string(),
  isMerchant: z.boolean(),
  numberOfActiveProduct: z.number(),
  numberOfSoldProduct: z.number(),
  sellerId: z.string(),
  sellerName: z.string(),
  stars: z.number(),
});

export const SellerProfileReviewsSchema = z.object({
  items: z.array(z.any()),
  total: z.number(),
  stars: z.number(),
  hasNextPage: z.boolean(),
});

export const ProductAttributeSchema = z.object({
  title: z.object({
    arName: z.string(),
    enName: z.string(),
  }),
  value: z.object({
    arName: z.string(),
    enName: z.string(),
  }),
});

export const ActiveListingSchema = z.object({
  originalPrice: z.number(),
  productId: z.string(),
  sellPrice: z.number(),
  grade: z.string(),
  arGrade: z.string(),
  productImage: z.string(),
  variantName: z.string(),
  arVariantName: z.string(),
  grandTotal: z.number(),
  modelName: z.string(),
  arModelName: z.string(),
  attributes: z.array(ProductAttributeSchema),
});

export const SellerActiveProductListResponseSchema = z.object({
  activeListings: z.array(ActiveListingSchema),
  hasNextPage: z.boolean(),
  totalListings: z.number(),
});

export const SellerBadgesDataResponseSchema = z.object({
  activateTenDaysGuarantee: z.boolean(),
  isSFPaid: z.boolean(),
  hasHighFRate: z.boolean(),
});

export type SellerProfileReviews = z.infer<typeof SellerProfileReviewsSchema>;
export type SellerProfileDataResponse = z.infer<
  typeof SellerProfileDataResponseSchema
>;
export type MerchantProfileResponse = z.infer<
  typeof MerchantProfileResponseSchema
>;
export type SellerBadgesDataResponse = z.infer<
  typeof SellerBadgesDataResponseSchema
>;
export type SellerActiveProductListResponse = z.infer<
  typeof SellerActiveProductListResponseSchema
>;

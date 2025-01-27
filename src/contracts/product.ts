import { z } from "zod";

export const BuyerSellerQuestionSchema = z.object({
  status: z.string(),
  _id: z.string(),
  product_id: z.string(),
  question: z.string(),
  questioner_id: z.string(),
  created_date: z.string(),
  buyer_name: z.string(),
  updated_date: z.string(),
  answer: z.string(),
});

export const BaseProductSchema = z.object({});

export const RecentlyViewedProductSchema = z.object({
  id: z.string(),
  deviceModel: z.object({
    name: z.string(),
    nameAr: z.string(),
  }),
  variant: z.object({
    name: z.string(),
    nameAr: z.string(),
  }),
  productImage: z.string().url(),
  grade: z.string(),
  gradeAr: z.string(),
  attributes: z.array(
    z.object({
      title: z.object({
        arName: z.string(),
        enName: z.string(),
      }),
      value: z.object({
        arName: z.string(),
        enName: z.string(),
      }),
    })
  ),
  isGreatDeal: z.boolean(),
  isMerchant: z.boolean(),
  originalPrice: z.number(),
  productImages: z.array(z.string().url()),
  sellPrice: z.number(),
  tags: z.string(),
  sellStatus: z.string(),
  sellDate: z.string().optional(),
  discount: z.number().optional(),
  condition: z
    .object({
      id: z.string(),
      name: z.string(),
      nameAr: z.string(),
      labelColor: z.string(),
      textColor: z.string(),
    })
    .optional(),
  productId: z.string(),
  modelName: z.string(),
  arModelName: z.string(),
  arVariantName: z.string(),
  variantName: z.string(),
  category: z.object({
    name: z.string(),
    nameAr: z.string(),
  }),
});

export const RecentlyViewedProductsResponseSchema = z.object({
  responseData: z.record(z.string(), RecentlyViewedProductSchema),
  statusCode: z.number(),
});

export type BuyerSellerQuestionResponse = z.infer<
  typeof BuyerSellerQuestionSchema
>;
export type RecentlyViewedProductRequest = z.infer<
  typeof RecentlyViewedProductSchema
>;
export type RecentlyViewedProduct = z.infer<typeof RecentlyViewedProductSchema>;
export type RecentlyViewedProductsResponse = z.infer<
  typeof RecentlyViewedProductsResponseSchema
>;

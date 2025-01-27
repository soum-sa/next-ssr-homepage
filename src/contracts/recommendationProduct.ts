import { z } from "zod";

export const RecommendationResponseSchema = z.object({
  status: z.boolean(),
});

const RecommendationProductSchema = z.object({
  items: z.array(z.string()),
  limit: z.number().int().positive(),
  offset: z.number().int().nonnegative(),
});

export type RecommendationProductResponse = z.infer<
  typeof RecommendationProductSchema
>;
export type RecommendationResponse = z.infer<
  typeof RecommendationResponseSchema
>;

import { z } from "zod";

export const BrandResponseSchema = z.object({
  _id: z.string(),
  status: z.enum(["Active"]),
  position: z.number(),
  brand_name_ar: z.string(),
  brand_name: z.string(),
  brand_icon: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  category_id: z.string(),
  is_add_on_enabled: z.boolean(),
  add_ons: z.array(
    z.object({
      id: z.string(),
      addOnName: z.string(),
      addOnNameAr: z.string(),
      addOnPrice: z.string(),
      addOnIcon: z.string(),
    })
  ),
});

export type BrandResponse = z.infer<typeof BrandResponseSchema>;

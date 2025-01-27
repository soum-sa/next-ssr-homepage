import { z } from "zod";

export const GTMResponseSchema = z.object({
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
  transaction_id: z.string(),
  value: z.number(),
  currency: z.enum(["SAR"]),
  items: z.array(
    z.object({
      item_name: z.string(),
      item_id: z.string(),
      item_variant: z.string(),
      item_category: z.string(),
      price: z.number(),
      quantity: z.number(),
      item_brand: z.string(),
      discount: z.number(),
    })
  ),
});

export const UserGTMResponseSchema = z.object({
  user_id: z.string(),
  name: z.string(),
  email: z.string().nullable(),
  phone: z.string(),
  address: z.object({
    address_id: z.string(),
    city: z.string(),
    address_type: z.number(),
    nationalAddress: z.string(),
  }),
});

export type GTMResponse = z.infer<typeof GTMResponseSchema>;
export type UserGTMResponse = z.infer<typeof UserGTMResponseSchema>;

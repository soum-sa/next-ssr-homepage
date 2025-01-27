import { z } from "zod";

export const UserAddressUpdateRequestSchema = z.object({
  street: z.string().min(1, "cannot be empty"),
  district: z.string().min(1, "cannot be empty"),
  city: z.string().min(1, "cannot be empty"),
});

export const UserAddressUpdateResponseSchema = z.object({
  is_default: z.boolean(),
  user_id: z.string(),
  street: z.string(),
  phone: z.string().optional(),
  district: z.string(),
  city: z.string(),
  postal_code: z.number(),
  created_date: z.string().optional(),
  is_verified: z.boolean(),
  _id: z.string(),
});

export type UserAddressUpdateRequest = z.infer<
  typeof UserAddressUpdateRequestSchema
>;
export type UserAddressUpdateResponse = z.infer<
  typeof UserAddressUpdateResponseSchema
>;

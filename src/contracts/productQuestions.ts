import { z } from "zod";

export const AskSellerQuestionRequestSchema = z.object({
  question: z.string(),
});

const violationSchema = z.object({
  code: z.number(),
  message: z.string(),
  action: z.string().nullable(),
});

export const AskSellerQuestionResponseErrorSchema = z.object({
  violations: z.array(violationSchema),
  message: z.string(),
});

export type AskSellerQuestionRequest = z.infer<
  typeof AskSellerQuestionRequestSchema
>;
export type AskSellerQuestionResponseError = z.infer<
  typeof AskSellerQuestionResponseErrorSchema
>;

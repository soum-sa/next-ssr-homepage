import { z } from "zod";

export const WordpressFAQSchema = z.object({
  slug: z.string(),
  acf: z.record(z.string()),
  title: z.object({
    rendered: z.string(),
  }),
});

export type WordpressFAQResponse = z.infer<typeof WordpressFAQSchema>;

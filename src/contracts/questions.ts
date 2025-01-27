import { z } from 'zod';

const Choice = z.object({
  choice_id: z.string(),
  option_ar: z.string(),
  option_en: z.string(),
  icon: z.string(),
  score: z.number(),
});

export const QuestionsResponseSchema = z.object({
  response_id: z.string(),
  question_id: z.string(),
  question_type: z.string(),
  order: z.number(),
  question_en: z.string(),
  question_ar: z.string(),
  answers: z.array(
    z.object({
      answer_id: z.string(),
      answer_en: z.string(),
      answer_ar: z.string(),
      sub_choices: z.array(Choice),
      score: z.number(),
      icon: z.string(),
    })
  ),
  choices: z.array(Choice),
});

export type QuestionsResponse = z.infer<typeof QuestionsResponseSchema>;

import { z } from 'zod';

export const UserProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export const SafetyProductSchema = z.object({
  productId: z.string(),
  title: z.string(),
  price: z.number(),
  affiliateUrl: z.string(),
  category: z.string(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
export type SafetyProduct = z.infer<typeof SafetyProductSchema>;

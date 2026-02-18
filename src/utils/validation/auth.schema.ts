import { z } from 'zod';
import { emailSchema, strongPasswordSchema } from './common.schema';

export const loginSchema = z.object({
  email: emailSchema,
  password: strongPasswordSchema,
});

export const registerSchema = z.object({
  name: z.string().min(2),
  email: emailSchema,
  password: strongPasswordSchema,
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;

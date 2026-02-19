import { emailSchema, strongPasswordSchema } from '@/utils/validation';
import { z } from 'zod';

export const loginSchema = z.object({
    email: emailSchema,
    password: strongPasswordSchema,
});

export const registerSchema = z.object({
    name: z.string().min(3, 'Nama minimal 3 karakter'),
    email: emailSchema,
    password: strongPasswordSchema,
});

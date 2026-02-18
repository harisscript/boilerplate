import { z } from 'zod';

/* ================= EMAIL ================= */

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(
    z.email({ message: 'Invalid email format' })
  );

/* ================= PASSWORD ================= */

export const strongPasswordSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Must contain at least one lowercase letter')
    .regex(/\d/, 'Must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Must contain at least one special character');

/* ================= REQUIRED STRING ================= */

export const requiredString = z
  .string()
  .trim()
  .min(1, { message: 'This field is required' });

/* ================= OPTIONAL STRING ================= */

export const optionalString = z
  .string()
  .trim()
  .optional();

/* ================= NUMBER ================= */

export const requiredNumber = z
  .coerce
  .number({ message: 'Must be a number' });

export const positiveNumber = z
  .coerce
  .number({ message: 'Must be a number' })
  .positive({ message: 'Must be greater than 0' });

/* ================= PHONE ================= */

export const phoneSchema = z
    .string()
    .trim()
    .regex(/^\+?\d{8,15}$/, {
        message: 'Invalid phone number',
    });

/* ================= UUID ================= */

export const uuidSchema = z.uuid({
  message: 'Invalid ID format',
});

import { z } from "zod";

const NAME_REGEX = /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u;

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .regex(NAME_REGEX, "First name can only contain letters."),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .regex(NAME_REGEX, "Last name can only contain letters."),
  email: z.string().trim().min(1, "Email is required.").email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required.")
    .max(100, "Subject must be 100 characters or less."),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(5000, "Message must be 5000 characters or less."),
  captchaToken: z.string().min(1),
});

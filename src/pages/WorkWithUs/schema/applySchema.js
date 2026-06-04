import { z } from "zod";

const NAME_REGEX = /^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u;
const normalizeUrl = (value) => {
  const v = String(value ?? "").trim();
  if (!v) return "";
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
};
const isHttpUrl = (value) => {
  try {
    const url = new URL(value);
    return (url.protocol === "http:" || url.protocol === "https:") && Boolean(url.hostname);
  } catch {
    return false;
  }
};
const optionalUrl = z
  .string()
  .trim()
  .transform((v) => (v ? normalizeUrl(v) : ""))
  .refine((v) => v === "" || isHttpUrl(v), "Please enter a valid URL.");
export const applySchema = z.object({
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
  phoneCountry: z.string().trim().min(1, "Country is required."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .refine((value) => {
      const normalized = value.replace(/[^\d+]/g, "");
      const digitsOnly = normalized.replace(/\+/g, "");
      return /^\+?\d{6,15}$/.test(normalized) && digitsOnly.length >= 6;
    }, "Please enter a valid phone number."),
  portfolioUrl: optionalUrl,
  captchaToken: z.string().min(1),
  privacyPolicy: z.boolean().refine((val) => val === true, "You must agree to the Privacy Policy."),
});

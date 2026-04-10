import { z } from "zod";

/** Must stay aligned with `phoneCountryOptions` codes. */
const PHONE_COUNTRY_CODES = ["no", "gb"];

/** Minimum digits in the local number (spaces/hyphens ignored). Matches e.g. NO 8-digit mobiles. */
const PHONE_MIN_DIGITS = 4;

/** Default Zod fragment for {@link PhoneNumberInput} (`phone`, `phoneCountry`). */
export const phoneNumberFieldSchema = z.object({
  phoneCountry: z.string().refine((c) => PHONE_COUNTRY_CODES.includes(c), {
    error: "Select a country",
  }),
  phone: z
    .string()
    .trim()
    .min(1, { error: "Phone number is required" })
    .regex(/^[\d\s-]+$/, { error: "Enter a valid phone number" })
    .refine((val) => val.replace(/[\s-]/g, "").length >= PHONE_MIN_DIGITS, {
      error: "Enter a valid phone number",
    }),
});

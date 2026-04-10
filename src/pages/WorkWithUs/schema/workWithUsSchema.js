import { z } from "zod";
import { phoneCountryCodes } from "../../../features/PhoneNumberInput/phoneCountryOptions";

function isValidProfileUrl(val) {
  if (val === "") return true;
  const candidate = /^https?:\/\//i.test(val) ? val : `https://${val}`;
  try {
    new URL(candidate);
    return true;
  } catch {
    return false;
  }
}

export const workWithUsSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phoneCountry: z.enum(phoneCountryCodes),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[0-9+()\s.-]{6,}$/, "Enter a valid phone number"),
  profileUrl: z
    .string()
    .trim()
    .refine(isValidProfileUrl, { message: "Enter a valid website or LinkedIn URL" }),
  message: z.string().trim().min(1, "Message is required"),
});

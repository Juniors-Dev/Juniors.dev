import { z } from "zod";

/** Default Zod fragment for {@link EmailInput} (`email` field). */
export const emailFieldSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { error: "Email is required" })
    .email({ error: "Enter a valid email address" }),
});

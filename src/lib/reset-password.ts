import { z } from "zod";

export const ResetFormData = z.object({
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 characters" }),
  confirmPassword: z.string(),
});
export type TResetFormData = z.infer<typeof ResetFormData>;

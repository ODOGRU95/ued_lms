import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter içermelidir"),
  email: z.string().email().min(2, "E-posta en az 2 karakter içermelidir."),
  subject: z.string() || null,
  message: z.string().min(20, "Mesaj en az 20 karakter içermelidir."),
});

export type TContactFormSchema = z.infer<typeof ContactFormSchema>;

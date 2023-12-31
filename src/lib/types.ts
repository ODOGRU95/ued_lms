import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter içermelidir"),
  email: z
    .string()
    .email()
    .min(2, { message: "Uygun bir e-posta adresi giriniz." }),
  subject: z.string() || null,
  message: z.string().min(5, "Mesaj en az 5 karakter içermelidir."),
});

export type TContactFormSchema = z.infer<typeof ContactFormSchema>;

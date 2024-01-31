import * as z from "zod";

export const AccountSetupFormSchema = z.object({
  fullname: z
    .string()
    .min(2, "İsim en az 2 karakter içermelidir")
    .max(100, { message: "İsim en fazla 100 karaktere sahip olabilir." }),
  birthday: z.string(),
  school: z
    .string()
    .min(3, { message: "Okul ismi en az 3 karaktere sahip olmalıdır." })
    .max(50, { message: "Okul ismi en fazla 50 karaktere sahip olabilir." }),
  email: z
    .string()
    .email()
    .min(2, { message: "Lütfen uygun bir e-posta adresi giriniz." })
    .max(120, { message: "Email en fazla 120 karaktere sahip olmalıdır." }),
});

export type TAccountSetupFormSchema = z.infer<typeof AccountSetupFormSchema>;

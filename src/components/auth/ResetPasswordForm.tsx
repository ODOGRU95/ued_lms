// "use client";

// import { signUp } from "@/app/auth/actions/sign-up";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Toaster } from "@/components/ui/sonner";
// // import { resetPassword } from "@/app/auth/actions/reset-password";
// import { toast } from "sonner";
// import { createClient } from "@/lib/supabase/server";
// import { cookies } from "next/headers";
// import { redirect, useParams, useSearchParams } from "next/navigation";
// import { resetPassword } from "@/app/auth/actions/reset-password";

// const formSchema = z
//   .object({
//     password: z.string().min(6, {
//       message: "Password must be at least 6 characters.",
//     }),
//     passwordConfirm: z.string(),
//   })
//   .refine(
//     (data) => {
//       return data.password === data.passwordConfirm;
//     },
//     { message: "Passwords do not match", path: ["passwordConfirm"] }
//   );

// export default function ResetPasswordForm() {
//   const searchParams = useSearchParams();

//   const newParam = searchParams.get("code");

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       password: "",
//       passwordConfirm: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     //   const result = await resetPassword(values.password);
//     //   if (result?.error) {
//     //     toast.error("Make sure your email is correct");
//     //   } else {
//     //     toast.success("Password reset link has been sent to your email address");
//     //   }

//     const password = values.password;

//     await resetPassword(password, newParam);
//   }
//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="">Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     className=""
//                     type="password"
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="passwordConfirm"
//             render={({ field }) => (
//               <FormItem className="grid gap-2">
//                 <FormLabel className="">Confirm Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     className=""
//                     type="password"
//                     autoCapitalize="none"
//                     autoCorrect="off"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit" className="w-full mt-2">
//             Change your password
//           </Button>
//         </form>
//       </Form>
//       <Toaster />
//     </div>
//   );
// }

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const supabase = createClient(cookieStore);

    if (searchParams.code) {
      const supabase = createClient(cookieStore);

      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset Password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/reset-password?message=Unable to reset Password. Try again!`
      );
    }

    redirect(
      `/login?message=Your Password has been reset successfully. Sign in.`
    );
  };

  return (
    <div>
      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover text-sm m-4"
      >
        Home
      </Link>

      <div className="w-full px-8 sm:max-w-md mx-auto mt-4">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={resetPassword}
        >
          <label className="text-md" htmlFor="password">
            New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-md" htmlFor="password">
            Confirm New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-6"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <button className="bg-indigo-700 rounded-md px-4 py-2 text-foreground mb-2">
            Reset
          </button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

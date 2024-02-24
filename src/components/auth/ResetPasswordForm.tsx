"use client";

import { signUp } from "@/app/auth/actions/sign-up";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Toaster } from "@/components/ui/sonner";
// import { resetPassword } from "@/app/auth/actions/reset-password";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect, useParams, useSearchParams } from "next/navigation";
import { resetPassword } from "@/app/auth/actions/reset-password";

const formSchema = z
  .object({
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    { message: "Passwords do not match", path: ["passwordConfirm"] }
  );

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();

  const newParam = searchParams.get("code");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //   const result = await resetPassword(values.password);
    //   if (result?.error) {
    //     toast.error("Make sure your email is correct");
    //   } else {
    //     toast.success("Password reset link has been sent to your email address");
    //   }

    const password = values.password;

    await resetPassword(password, newParam);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="">Password</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className=""
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-2">
            Change your password
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { forgotPassword } from "@/app/auth/actions/forgot-password";
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
import { toast } from "sonner";
import Link from "next/link";

const formSchema = z.object({
  emailAddress: z.string().email({
    message: "It must be a valid email.",
  }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const result = await forgotPassword(values.emailAddress);
  if (result?.error) {
    toast.error("Something went wrong");
  } else {
    toast.success("Password reset link has been sent to your email address");
  }
}

export function ForgotPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 rounded-xl"
      >
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem className="grid gap-4">
              <FormLabel>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl">Forgot Your Password?</p>
                  <p className="text-lg font-light">
                    Enter the email address you used to register with
                  </p>
                </div>{" "}
              </FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="Enter your email address"
                  type="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between gap-3">
          <Link href={"/auth"} className="w-full mt-2">
            <Button variant={"outline"}>Back to sign in</Button>
          </Link>
          <Button type="submit" className="w-full mt-2">
            Send Reset Email
          </Button>
        </div>
      </form>
    </Form>
  );
}

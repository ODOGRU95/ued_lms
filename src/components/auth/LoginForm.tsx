"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { signIn } from "@/app/auth/actions/sign-in";
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
import GithubOAuth from "./GithubOAuthForm";
import GoogleOAuth from "./GoogleOAuthForm";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeIcon, EyeOffIcon } from "lucide-react";

const formSchema = z.object({
  emailAddress: z.string().email({
    message: "It must be a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const result = await signIn(values.emailAddress, values.password);
  if (result?.error) {
    toast.error("Make sure your email and password are correct");
  } else {
    toast.success("Successfully logged in");
  }
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  // const toggleShowPassword = () => {
  //   setShowPassword(showPassword ? false : true);
  // };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem className="grid gap-4">
              <FormLabel className="">Email</FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="name@example.com"
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-4">
              <FormLabel className="flex items-center justify-between">
                <p>Password</p>
                <Link
                  href={"/forgot-password"}
                  className="hover:underline font-normal flex justify-end"
                >
                  Forgot Password?
                </Link>
              </FormLabel>
              <FormControl>
                <div className="relative flex items-center ">
                  <div className="w-full">
                    <Input
                      className="pr-12"
                      type={showPassword ? "text" : "password"}
                      autoCapitalize="none"
                      autoCorrect="off"
                      {...field}
                    />
                  </div>
                  {showPassword ? (
                    <EyeIcon
                      className="absolute right-3"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <EyeOffIcon
                      className="absolute right-3 "
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-2">
          Sign In
        </Button>
      </form>
    </Form>
  );
}

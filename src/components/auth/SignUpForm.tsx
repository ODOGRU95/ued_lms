"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUp } from "@/app/auth/actions/sign-up";
import { Toaster } from "../ui/sonner";
import GoogleOAuth from "./GoogleOAuthForm";
import GithubOAuth from "./GithubOAuthForm";

const formSchema1 = z
  .object({
    emailAddress: z.string().email({
      message: "It must be a valid email.",
    }),
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

function onSubmit(values: z.infer<typeof formSchema1>) {
  signUp(values.emailAddress, values.password);
}

export function SignUpForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema1>>({
    resolver: zodResolver(formSchema1),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
    },
  });
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <div className="grid grid-flow-col justify-center space-x-2 w-full">
                  <GoogleOAuth />
                  <GithubOAuth />
                </div>
                <div className="mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                  OR
                </div>
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
            Sign Up
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}

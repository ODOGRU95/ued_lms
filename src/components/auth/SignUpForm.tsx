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
import { signUp } from "@/app/auth/actions/signUp";
import { Toaster } from "../ui/sonner";

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
  console.log(values);
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
                <FormLabel className="text-neutral-200">Email</FormLabel>
                <FormControl>
                  <Input
                    className="focus:ring-pink-500"
                    placeholder="name@example.com"
                    type="email"
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
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel className="text-neutral-200">Password</FormLabel>
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
                <FormLabel className="text-neutral-200">
                  Confirm Password
                </FormLabel>
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
          <Button
            type="submit"
            className="bg-neutral-700 hover:bg-pink-500 w-full mt-2"
          >
            Sign Up
          </Button>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}

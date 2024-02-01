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
  // ...
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
        <Button type="submit" variant={"default"} className="w-full mt-2">
          Sign In
        </Button>
      </form>
    </Form>
  );
}

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
import { signIn } from "@/app/auth/actions/signIn";
import { toast } from "sonner";

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
            <FormItem className="grid gap-2">
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
        <Button type="submit" className="w-full mt-2">
          Sign In
        </Button>
      </form>
    </Form>
  );
}

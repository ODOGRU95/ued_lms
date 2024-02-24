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

const formSchema = z.object({
  emailAddress: z.string().email({
    message: "It must be a valid email.",
  }),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  const result = await forgotPassword(values.emailAddress);
  if (result?.error) {
    toast.error("Make sure your email is correct");
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

        <Button
          type="submit"
          variant={"default"}
          className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-white
        shadow-[-1px_-1px_5px_rgba(255,_255,220,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.45)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-slate-400
    `}
        >
          Send Reset Email
        </Button>
      </form>
    </Form>
  );
}

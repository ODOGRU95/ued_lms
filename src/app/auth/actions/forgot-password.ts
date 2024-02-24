"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const forgotPassword = async (email: string) => {
  "use server";

  const origin = headers().get("origin");

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  });

  if (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }

  return redirect("/");
};

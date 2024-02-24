"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const signUp = async (email: string, password: string) => {
  "use server";

  const origin = headers().get("origin");

  const cookieStore = cookies();
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
    return redirect("/");
  }

  return redirect("/");
};

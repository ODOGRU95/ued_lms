"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = async (email: string, password: string) => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Something went wrong" };
  }

  return redirect("/dashboard");
};

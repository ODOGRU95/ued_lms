import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signOut = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
};

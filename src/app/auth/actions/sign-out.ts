import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const signOut = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient();
  await supabase.auth.signOut();

  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
};

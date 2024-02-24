"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

// Function to submit data to Supabase
export const fetchFromSupabase = async () => {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient();
  //   console.log(fullname);

  const { data } = await supabase.auth.getSession();

  const { data: profile, error } = await supabase
    .from("profile")
    .select("*")
    .eq("id", data.session?.user.id)
    .select();

  // console.log(profile);

  // console.log(userData);

  if (error) {
    return {
      error: "Something went wrong",
    };
  } else {
    const userData = profile![0];

    return userData;
  }
};

"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

// Function to submit data to Supabase
export const submitToSupabase = async (
  fullname: string,
  birthday: string,
  school: string,
  email: string
) => {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  console.log(fullname);

  try {
    const { error } = await supabase
      .from("profile")
      .upsert([
        {
          fullname: fullname,
          birthday: birthday,
          school: school,
          email: email,
        },
      ])
      .select();
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
  // return { fullname, birthday, school, email };
};

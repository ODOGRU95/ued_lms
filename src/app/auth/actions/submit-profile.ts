"use server";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

// Function to submit data to Supabase
export const submitToSupabase = async (
  fullname: string | undefined,
  nickname: string,
  birthday: string,
  school: string,
  email: string,
  grade: string,
  avatar_url: string | undefined
) => {
  "use server";
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  // console.log(fullname);

  const { data } = await supabase.auth.getSession();

  try {
    const { error } = await supabase
      .from("profile")
      .update([
        {
          fullname: fullname,
          nickname: nickname,
          birthday: birthday,
          school: school,
          email: email,
          grade: grade,
          avatar_url: avatar_url,
        },
      ])
      .eq("id", data.session?.user.id)
      .select();
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};

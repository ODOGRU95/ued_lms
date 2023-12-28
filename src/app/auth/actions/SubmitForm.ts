"use server";
import { createClient } from "@/lib/supabase/server";
import { supabase } from "@/lib/supabase/supabaseClient";
import { cookies } from "next/headers";

// Function to submit data to Supabase
export const submitToSupabase = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  "use server";
  // const cookieStore = cookies();
  // const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase.from("ContactForm").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ]);
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
  return { name, email, subject, message };
};

import { supabase } from "@/lib/supabase/supabaseClient";

// Function to submit data to Supabase
export async function submitToSupabase(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  try {
    const { data, error } = await supabase
      .from("ContactForm")
      .insert([
        {
          name: "name",
          email: "email",
          subject: "subject",
          message: "message",
        },
      ])
      .select();

    // if (error) throw error;
    // console.log("Data submitted:", data);
    // // You can add more logic here to handle successful submission
  } catch (error) {
    return {
      error: "Something went wrong",
    };
    console.error("Error submitting data:", error);
    // Handle the error here
  }
}

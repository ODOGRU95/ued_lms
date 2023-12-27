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
      .insert([{ name, email, subject, message }]);

    if (error) throw error;
    console.log("Data submitted:", data);
    // You can add more logic here to handle successful submission
  } catch (error) {
    console.error("Error submitting data:", error);
    // Handle the error here
  }
}

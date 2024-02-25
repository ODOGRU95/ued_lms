// "use server";
// import { createClient } from "@/lib/supabase/server";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export const resetPassword = async (password: string) => {
//   "use server";

//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);

//   if (searchParams.code) {
//     const { error } = await supabase.auth.exchangeCodeForSession(
//       searchParams.code
//     );
//     if (error) {
//       return redirect(
//         `/reset-password?message=Unable to reset Password. Link expired!`
//       );
//     }
//   }

//   const { error } = await supabase.auth.updateUser({
//     password,
//   });

//   if (error) {
//     return { error: "Something went wrong" };
//   }

//   return redirect("/");
// };
"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const resetPassword = async (
  password: string,
  newParam: string | null
) => {
  "use server";

  const cookieStore = cookies();
  const supabase = createClient();

  // if (searchParams.code) {
  //   const { error } = await supabase.auth.exchangeCodeForSession(
  //     searchParams.code
  //   );
  //   if (error) {
  //     return redirect(
  //       `/reset-password?message=Unable to reset Password. Link expired!`
  //     );
  //   }
  // }

  try {
  } catch (error) {}

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return redirect(
      "/reset-password?message=Unable to reset Password. Try again "
    );
  }

  return redirect(
    "/auth?message=Your password has been reset successfully. Please login"
  );
};

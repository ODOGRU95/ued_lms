// import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// import React from "react";

// export default function ResetPasswordPage() {
//   return (
//     <div className="flex items-center justify-center w-full">
//       <ResetPasswordForm />
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const supabase = createClient();

    if (searchParams.code) {
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset Password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/reset-password?message=Unable to reset Password. Try again!`
      );
    }

    redirect(
      `/auth?message=Your Password has been reset successfully. Sign in.`
    );
  };

  return (
    <div>
      <div className="w-full sm:max-w-md mx-auto">
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          action={resetPassword}
        >
          <label className="text-xl" htmlFor="password">
            New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-4"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <label className="text-xl" htmlFor="password">
            Confirm New Password
          </label>
          <input
            className="rounded-md px-4 py-2 bg-inherit border mb-4"
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            required
          />
          <Button type="submit" className="w-full mt-2">
            Reset Password
          </Button>

          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

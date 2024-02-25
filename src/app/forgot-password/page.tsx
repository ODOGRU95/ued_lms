import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { createClient } from "@/lib/supabase/server";
import { redirect, useParams } from "next/navigation";
import React from "react";

export default async function ForgotPasswordPage() {
  return (
    <div className="flex w-full items-center justify-center flex-col gap-4">
      <ForgotPasswordForm />
    </div>
  );
}

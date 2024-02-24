import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { useParams } from "next/navigation";
import React from "react";

export default function ForgotPasswordPage() {
  return (
    <div className="flex w-full items-center justify-center flex-col gap-4">
      <ForgotPasswordForm />
    </div>
  );
}

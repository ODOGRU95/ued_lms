import { AccountForm } from "@/components/AccountForm";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth");
  }

  return (
    <div className="h-full flex justify-center">
      <AccountForm />
    </div>
  );
}

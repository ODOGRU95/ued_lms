import { LoginForm } from "@/components/auth/LoginForm";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signOut } from "../auth/actions/signOut";

const signOutFnc = async () => {
  "use server";
  await signOut();
  return redirect("/auth");
};

export default async function Dashboard() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center font-bold ">
        <span className="text-6xl">Welcome to dashboard</span>
        <div className="text-red-400 text-6xl">{user?.email}</div>
        <div className="mt-8 py-2 px-3 flex no-underline bg-btn-background hover:bg-btn-background-hover border rounded-lg">
          <form action={signOutFnc}>
            <button className="flex flex-row items-center ">Logout</button>
          </form>
          <ChevronRight />
        </div>
      </div>
    </>
  );
}

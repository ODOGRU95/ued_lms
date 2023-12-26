import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signOut } from "@/app/auth/actions/signOut";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOutFnc = async () => {
    "use server";
    await signOut();
    return redirect("/auth");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <div className="flex flex-row gap-1">
        Hey, <div className="text-indigo-200">{user.email}!</div>
      </div>
      <form action={signOutFnc}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/auth"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}

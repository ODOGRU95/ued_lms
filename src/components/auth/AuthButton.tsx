import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signOut } from "@/app/auth/actions/signOut";
import { ChevronRight, LogOut } from "lucide-react";
import { Button } from "../ui/button";

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
      <form action={signOutFnc}>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="text-lg gap-2 py-2 px-4 rounded-md transition-all "
        >
          Sign out <LogOut />
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/auth"
      className=" py-2 px-3 flex items-center rounded-md transition-all"
    >
      <Button variant={"secondary"} size={"lg"} className="text-lg">
        Sign In
        <ChevronRight />
      </Button>
    </Link>
  );
}

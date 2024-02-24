import { signOut } from "@/app/auth/actions/sign-out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/server";
import {
  CreditCard,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";
import { Home } from "lucide-react";

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOutFnc = async () => {
    "use server";
    await signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-9 w-9 flex items-center justify-center">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <RxAvatar className="h-9 w-9" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-3 mt-5">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2">
            <Home className="h-4 w-4" />
            <Link href={"/"}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <User className="h-4 w-4" />
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <LayoutDashboard className="h-4 w-4" />
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2  transition-all">
            <CreditCard className="h-4 w-4" />
            <Link href={"/pricing"}>Pricing</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <LogOut className="h-4 w-4" />
            <form action={signOutFnc}>
              <button>Sign out</button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <Link
      href="/auth"
      className="py-2 px-3 flex items-center rounded-md transition-all "
    >
      <Button variant={"default"} size={"sm"} className="text-sm">
        Sign In
        <LogIn className="h-6 w-6 ml-1" />
      </Button>
    </Link>
  );
}

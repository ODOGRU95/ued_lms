import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

import { signOut } from "@/app/auth/actions/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchFromSupabase } from "@/lib/fetch-profile";
import { CreditCard, Home, LayoutDashboard, LogOut, User } from "lucide-react";
import { RxAvatar } from "react-icons/rx";
import DrawOutlineBtn from "./DrawOutlineButton";

export default async function Profile() {
  const fetchFn = await fetchFromSupabase();

  const signOutFnc = async () => {
    "use server";
    await signOut();
    return redirect("/auth");
  };

  return (
    <div>
      {!fetchFn?.id ? (
        <Link href="/auth" className=" animate-fade">
          {/* <Button variant="default">Sign In</Button> */}
          <DrawOutlineBtn />
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {fetchFn?.avatar_url ? (
              <Image
                src={fetchFn?.avatar_url || ""}
                alt={fetchFn?.nickname || ""}
                width={30}
                height={30}
                className="rounded-full cursor-pointer"
              />
            ) : (
              <div className="flex items-center justify-center rounded-full  cursor-pointer">
                <div>
                  <Avatar className="h-10 w-10 flex items-center justify-center">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      <RxAvatar className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            )}
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
              <form action={signOutFnc}>
                <button className="flex gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

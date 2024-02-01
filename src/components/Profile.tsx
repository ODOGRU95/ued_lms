"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { protectedPaths } from "@/lib/constant";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, Home, LayoutDashboard, LogOut, User } from "lucide-react";

export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  const pathname = usePathname();

  if (isFetching) {
    return <></>;
  }

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    if (protectedPaths.includes(pathname)) {
      router.replace("/auth?next=" + pathname);
    }
  };

  return (
    <div>
      {!data?.id ? (
        <Link href="/auth" className=" animate-fade">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <>
              {data?.avatar_url ? (
                <Image
                  src={data.avatar_url || ""}
                  alt={data.nickname || ""}
                  width={40}
                  height={40}
                  className=" rounded-full  animate-fade cursor-pointer"
                />
              ) : (
                <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full text-2xl font-bold cursor-pointer">
                  <h1>{data.email[0]}</h1>
                </div>
              )}
            </>
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
            <DropdownMenuItem className="gap-2" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

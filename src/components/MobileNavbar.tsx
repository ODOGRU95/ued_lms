"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const MobileNavbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-30  transition-all duration-500 shadow-xl backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8  ">
          <div className="md:hidden  flex items-center justify-between h-16 ">
            <Logo />
            <div className="md:hidden flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-3 mt-5">
                  <DropdownMenuItem>
                    <Link href={"/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/pricing"}>Pricing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;

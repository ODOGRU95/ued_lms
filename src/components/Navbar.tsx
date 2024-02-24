import Link from "next/link";
import Logo from "./Logo";
import Profile from "./Profile";
import { ModeToggle } from "./theme/ThemeSwitcher";

export default function Navbar() {
  return (
    <>
      <nav className="max-w-5xl sticky text-xl inset-x-0 top-3 z-30 w-full shadow-xl backdrop-blur-lg transition-all duration-500 rounded-full mx-auto p-3 sm:px-6 lg:px-8 ">
        <div className="hidden md:block">
          <div className="flex w-full items-center justify-between ">
            <Logo />
            <div className="space-x-5">
              <Link href={"/dashboard"} className="text-xl">
                Dashboard
              </Link>
              <Link href={"/pricing"} className="text-xl">
                Pricing
              </Link>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <ModeToggle />
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

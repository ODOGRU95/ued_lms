import Link from "next/link";
import Logo from "./Logo";
import AuthButton from "./auth/AuthButton";

export default function Navbar() {
  return (
    <>
      <nav className="sticky text-xl inset-x-0 top-0 z-30 w-full px-4 shadow-xl backdrop-blur-lg transition-all duration-500 hidden md:block">
        <div className="max-w-7xl mx-auto p-3 sm:px-6 lg:px-8 ">
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
            <AuthButton />
          </div>
        </div>
      </nav>
    </>
  );
}

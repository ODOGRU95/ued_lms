import { useState } from "react";
import Logo from "./Logo";
import AuthButton from "./auth/AuthButton";
import { ModeToggle } from "./theme/ThemeSwitcher";
import Profile from "./Profile";

const MobileNavbar = () => {
  return (
    <>
      <nav className="sticky z-30  transition-all duration-500 shadow-xl backdrop-blur-lg">
        <div className="px-6 sm:px-6 lg:px-8">
          <div className="md:hidden flex  justify-between items-center">
            <Logo />
            <div className="md:hidden flex flex-row gap-2 items-center">
              <ModeToggle />
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;

import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function SwitchNavBar() {
  return (
    <div className="mt-5">
      <Navbar />
      <MobileNavbar />
    </div>
  );
}

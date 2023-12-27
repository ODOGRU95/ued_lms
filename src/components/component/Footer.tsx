import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    // <div className="pl-10 pr-10 max-w-7xl pt-10 text-lg font-light flex items-center justify-between">
    //   <h1> © Geyikli Inc. 2023</h1>
    //   <h1>Instagram</h1>
    //   </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 ">
      <div className="flex w-full items-center justify-between ">
        <h1> © Geyikli Inc. 2023</h1>
        <div className="space-x-5 text-lg font-light">
          <Link href={"/dashboard"}>Instagram</Link>
          <Link href={"/pricing"}>E-posta</Link>
        </div>
      </div>
    </div>
  );
}

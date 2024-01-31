import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    // <div className="pl-10 pr-10 max-w-7xl pt-10 text-lg font-light flex items-center justify-between">
    //   <h1> © Geyikli Inc. 2023</h1>
    //   <h1>Instagram</h1>
    //   </div>
    <div className=" px-4 sm:px-6 lg:px-8 pb-4 pt-10 ">
      <div className="flex flex-row justify-between">
        <h1> © Geyikli Inc. 2023</h1>
        <div className=" text-md font-extralight space-x-5">
          <Link href={"/dashboard"}>Instagram</Link>
          <Link href={"/pricing"}>E-posta</Link>
        </div>
      </div>
    </div>
  );
}

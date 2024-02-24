import SwitchNavBar from "@/components/SwitchNavBar";
import React from "react";

export default function ConfirmPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div>
      <SwitchNavBar />
      <div className="w-full px-8 sm:max-w-lg mx-auto mt-8">
        <p className="text-foreground"> {searchParams.message} </p>
      </div>
    </div>
  );
}

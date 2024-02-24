import Loader from "@/components/BarLoader";
import { Loader2 } from "lucide-react";
import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <RiLoader2Fill className="animate-spin h-[100px] w-[100px] duration-3000" />
    </div>
    // <Loader />
  );
}

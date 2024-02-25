import Loader from "@/components/BarLoader";
import Skeleton from "@/components/Skeleton";
import { Loader2 } from "lucide-react";
import React from "react";
import { RiLoader2Fill } from "react-icons/ri";

export default function Loading() {
  return (
    <div>
      <Skeleton />
    </div>
    // <Loader />
  );
}

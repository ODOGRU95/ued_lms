import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AuthButton from "@/components/auth/AuthButton";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center font-bold">
        <div className="text-6xl">Hello World</div>
        <div className="flex flex-row items-center border rounded-lg">
          <AuthButton />
          <ChevronRight />
        </div>
      </div>
    </>
  );
}

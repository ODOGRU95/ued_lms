"use client";

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import Image from "next/image";

export default function GoogleOAuth() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    // <Button
    //   variant={"ghost"}
    //   onClick={loginWithGoogle}
    //   className="border border-zinc-700 flex items-center justify-center gap-1"
    // >
    //   <Image
    //     alt="google-logo"
    //     src={"/google-logo.svg"}
    //     width={40}
    //     height={40}
    //   />
    //   Sign in with Google
    // </Button>

    <button
      onClick={loginWithGoogle}
      className="shadow-[0_0_0_1px_#000000_inset] px-6 py-2 bg-transparent border border-zinc-700 dark:border-white dark:text-white text-black rounded-lg font-normal transform hover:-translate-y-1 transition duration-400 flex items-center justify-center"
    >
      <Image
        alt="google-logo"
        src={"/google-logo.svg"}
        width={40}
        height={40}
      />
      Sign in with Google
    </button>
  );
}

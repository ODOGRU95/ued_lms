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
    <Button variant={"ghost"} onClick={loginWithGoogle}>
      <Image
        alt="google-logo"
        src={"/google-logo.svg"}
        width={40}
        height={40}
      />
    </Button>
  );
}
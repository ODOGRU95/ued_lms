"use client";

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { Github } from "lucide-react";

export default function GithubOAuth() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const loginWithGithub = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <Button
      variant={"ghost"}
      onClick={loginWithGithub}
      className="border border-zinc-700 flex items-center justify-center gap-1"
    >
      <Github />
      Sign in with Github
    </Button>
  );
}

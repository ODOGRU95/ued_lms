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
    // <Button
    //   variant={"ghost"}
    //   onClick={loginWithGithub}
    //   className="border border-zinc-700 flex items-center justify-center gap-1"
    // >
    //   <Github />
    //   Sign in with Github
    // </Button>
    <button
      onClick={loginWithGithub}
      className="shadow-[0_0_0_1px_#000000_inset] px-6 py-2 bg-transparent border border-zinc-700 dark:border-white dark:text-white text-black rounded-lg font-normal transform hover:-translate-y-1 transition duration-400 flex items-center justify-center gap-1"
    >
      <Github />
      Sign in with Google
    </button>
  );
}

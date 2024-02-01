"use client";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { createClient } from "@/lib/supabase/server";
import { useQuery } from "@tanstack/react-query";
import { cookies } from "next/headers";

const initUser = {
  id: "",
  fullname: "",
  nickname: "",
  birthday: "",
  school: "",
  grade: "",
  email: "",
  avatar_url: "",
  created_at: "",
};

export default function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      //   const cookieStore = cookies();
      //   const supabase = createClient(cookieStore);

      const supabase = supabaseBrowser();

      const { data } = await supabase.auth.getSession();

      if (data.session?.user) {
        //fetch user information

        const { data: user } = await supabase
          .from("profile")
          .select("*")
          .eq("id", data.session.user.id)
          .single();

        return user;
      }
      return initUser;
    },
  });
}

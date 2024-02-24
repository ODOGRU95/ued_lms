import { AccountForm } from "@/components/AccountForm";
import { fetchFromSupabase } from "@/lib/fetch-profile";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const supabase = createClient();

  ///profile girildikten sonra auth sayfasından sonra profile page'e yönlendirsin
  const fetchFn = await fetchFromSupabase();
  // console.log(fetchFn);

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/auth");
  } else {
  }

  return (
    <div className="h-full flex justify-center">
      <AccountForm {...fetchFn} />
    </div>
  );
}

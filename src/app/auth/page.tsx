import { LoginForm } from "@/components/auth/LoginForm";
import { SignUpForm } from "@/components/auth/SignUpForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <Link
          href="/"
          className="absolute left-8 top-8 py-2 pr-2 no-underline bg-btn-background hover:bg-neutral-700/70 flex items-center group text-sm border rounded-lg"
        >
          <div className="flex flex-row items-center">
            <ChevronLeft />
            <div className="font-bold">Back</div>
          </div>
        </Link>
        <Tabs defaultValue="signIn" className="max-w-lg">
          <TabsList className="grid grid-cols-2 bg-neutral-800 text-neutral-200">
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signIn" className="">
            <Card className="bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-neutral-200">Sign In</CardTitle>
                <CardDescription className="text-neutral-400">
                  Enter your email and password below to login your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <LoginForm />
              </CardContent>
              <CardFooter>
                <p className="px-8 text-center text-sm text-neutral-400">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 text-neutral-300 font-bold hover:text-pink-500"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 text-neutral-300 font-bold hover:text-pink-500"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signUp">
            <Card className="bg-neutral-800">
              <CardHeader>
                <CardTitle className="text-neutral-200">Sign Up</CardTitle>
                <CardDescription className="text-neutral-400">
                  Enter your email and password below to create your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignUpForm />
              </CardContent>

              <CardFooter>
                <p className="px-8 text-center text-sm text-neutral-400">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 text-neutral-300 font-bold hover:text-pink-500"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 text-neutral-300 font-bold hover:text-pink-500"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

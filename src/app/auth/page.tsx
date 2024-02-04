import Logo from "@/components/Logo";
import GithubOAuth from "@/components/auth/GithubOAuthForm";
import GoogleOAuth from "@/components/auth/GoogleOAuthForm";
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
import Image from "next/image";
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
          className="absolute left-8 top-24 py-2 pr-2 no-underline flex items-center group text-sm border rounded-lg"
        >
          <div className="flex flex-row items-center">
            <ChevronLeft />
            <div className="font-bold">Back</div>
          </div>
        </Link>
        <Tabs defaultValue="signIn" className="max-w-lg">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="signIn">Sign In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signIn" className="">
            <Card className="">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src={"/logoipsum-223.svg"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="pb-3"
                />
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription className="">
                  Please enter your details to login
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-flow-col justify-center space-x-2 w-full">
                  <GoogleOAuth />
                  <GithubOAuth />
                </div>
                <div className="mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                  OR
                </div>
                <LoginForm />
              </CardContent>
              <CardFooter>
                <p className="px-8 text-center text-sm ">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 font-bold"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 font-bold"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signUp">
            <Card className="">
              <CardHeader className="flex items-center justify-center">
                <Image
                  src={"/logoipsum-223.svg"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="pb-3"
                />
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription className="">
                  Please enter your details to sign up
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignUpForm />
              </CardContent>

              <CardFooter>
                <p className="px-8 text-center text-sm ">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 font-bold"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 font-bold"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

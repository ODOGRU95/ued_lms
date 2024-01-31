import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import SwitchNavBar from "@/components/SwitchNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UEP",
  description: "Next-gen Education Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen max-h-screen justify-between">
            {/* <MobileNavbar /> */}
            {/* <Navbar /> */}
            <SwitchNavBar />
            {children}
            <Footer />
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

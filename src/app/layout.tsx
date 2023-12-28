import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

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
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <MobileNavbar />
          {children}
          <Toaster richColors position="top-center" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

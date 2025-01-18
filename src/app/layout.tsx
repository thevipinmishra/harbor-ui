import "./globals.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Toaster } from "@/components/ui/Toast";

const fontSans = Inter({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className={clsx("min-h-dvh bg-background font-sans")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

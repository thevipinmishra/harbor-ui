import "./globals.css";
import { DM_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Toaster } from "@/components/ui/Toast";

const fontSans = Inter({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = DM_Mono({
    display: "swap",
    weight: ["500"],
    variable: "--font-mono",
  });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={clsx(fontSans.variable, fontMono.variable)} suppressHydrationWarning>
      <body className={clsx("min-h-dvh bg-background font-sans")}>
        <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

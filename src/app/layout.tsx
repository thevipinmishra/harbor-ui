import { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'
import clsx from "clsx";

 const fontSans = Inter({
    display: "swap",
    variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "Harbor UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className={clsx("min-h-dvh bg-background font-sans",)}>{children}</body>
    </html>
  );
}

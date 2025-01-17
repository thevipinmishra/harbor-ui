import { Toaster } from "@/components/ui/Toast";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}
  <Toaster />
  </>;
}

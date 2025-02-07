import type { ReactNode } from "react";
import { LocaleProvider } from "../../components/utils";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleProvider locale="en-IN">{children}</LocaleProvider>;
}

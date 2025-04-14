"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "react-aria-components";

export default function Layout({ children }: { children: ReactNode }) {
  return <I18nProvider locale="en-IN">{children}</I18nProvider>;
}

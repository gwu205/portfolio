import type { Metadata } from "next";
import "../globals.css";
import { buildMetadata } from "../i18n/metadata";
import { RootShell } from "../i18n/RootShell";

export const metadata: Metadata = buildMetadata({ locale: "en", path: "/" });

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}

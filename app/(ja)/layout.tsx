import type { Metadata } from "next";
import "../globals.css";
import { buildMetadata } from "../i18n/metadata";
import { RootShell } from "../i18n/RootShell";

export const metadata: Metadata = buildMetadata({ locale: "ja", path: "/" });

export default function JaRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="ja">{children}</RootShell>;
}

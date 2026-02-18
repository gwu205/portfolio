import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { AnimatedMain } from "./components/common/AnimatedMain";
import { RouteTransitionProvider } from "./components/common/RouteTransitionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geoffrey Wu | Product Designer",
  description:
    "Geoffrey helps product teams ship user-focused products, builds out thoughtfully considered design systems, and crafts innovative user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body className="font-sans bg-gradient-to-b from-gray-800 to-black">
        <RouteTransitionProvider>
          <AnimatedMain>{children}</AnimatedMain>
        </RouteTransitionProvider>
      </body>
    </html>
  );
}

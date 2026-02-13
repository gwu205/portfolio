import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Geoffrey Wu | Product Designer",
  description:
    "Geoffrey helps product teams ship user-focused products, builds out thoughtfully considered design systems, and crafts innovative user experiences.",
};

const NoiseOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none mix-blend-multiply"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect color-interpolation-filters='sRGB' width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      filter: "brightness(140%)",
    }}
  />
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body className="font-sans bg-gradient-to-b from-gray-800 to-black">
        {children}
      </body>
    </html>
  );
}

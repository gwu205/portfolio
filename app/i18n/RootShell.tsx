import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";
import { AnimatedMain } from "../components/common/AnimatedMain";
import { RouteTransitionProvider } from "../components/common/RouteTransitionProvider";
import { SmoothScroll } from "../components/common/SmoothScroll";
import { LocaleProvider } from "./LocaleProvider";
import { Locale, localeHtmlLang } from "./locales";

export function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={localeHtmlLang[locale]}>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body className="font-sans bg-gradient-to-b from-gray-800 to-black">
        <SmoothScroll />
        <LocaleProvider locale={locale}>
          <RouteTransitionProvider>
            <AnimatedMain>{children}</AnimatedMain>
          </RouteTransitionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

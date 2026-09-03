"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { Locale, switchLocalePath } from "./locales";

// "JP" is the visible label; `lang`/`hrefLang` stay the correct BCP 47 `ja`.
const VISIBLE_LABEL: Record<Locale, string> = { en: "EN", ja: "JP" };

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { locale, dict } = useLocale();

  const target: Locale = locale === "en" ? "ja" : "en";
  const isJa = locale === "ja";

  return (
    <a
      href={switchLocalePath(pathname, target)}
      hrefLang={target}
      aria-label={
        target === "ja"
          ? dict.localeSwitcher.toJapanese
          : dict.localeSwitcher.toEnglish
      }
      className={`group flex items-center gap-2 shrink-0 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`transition-opacity duration-300 ${
          isJa ? "opacity-50 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {VISIBLE_LABEL.en}
      </span>

      <span className="relative block h-5 w-10 rounded-full border border-white/40 bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
        <span
          className={`absolute left-0.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white transition-transform duration-300 ease-out group-hover:bg-purple-200 ${
            isJa ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>

      <span
        aria-hidden="true"
        className={`transition-opacity duration-300 ${
          isJa ? "opacity-100" : "opacity-50 group-hover:opacity-100"
        }`}
      >
        {VISIBLE_LABEL.ja}
      </span>
    </a>
  );
}

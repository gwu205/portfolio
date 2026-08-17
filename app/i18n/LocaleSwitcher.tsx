"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { locales, switchLocalePath } from "./locales";

const shortLabel: Record<string, string> = {
  en: "EN",
  ja: "JA",
};

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { locale, dict } = useLocale();

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      role="group"
      aria-label={dict.localeSwitcher.label}
    >
      {locales.map((target) => {
        const isActive = target === locale;
        const href = switchLocalePath(pathname, target);
        return (
          <a
            key={target}
            href={href}
            hrefLang={target}
            aria-current={isActive ? "true" : undefined}
            className={`transition-opacity duration-300 ${
              isActive ? "opacity-100 pointer-events-none" : "opacity-50 hover:opacity-100"
            }`}
          >
            {shortLabel[target]}
          </a>
        );
      })}
    </div>
  );
}

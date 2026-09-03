export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

// BCP 47 tags used for `lang` / `hreflang` attributes.
export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  ja: "ja",
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wuxdesign.dev";

function localeToPathPrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** localizeHref("ja", "/projects/x") -> "/ja/projects/x" */
export function localizeHref(locale: Locale, path: string): string {
  const prefix = localeToPathPrefix(locale);
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

/** The equivalent path in `locale`, so switching stays on the same page. */
export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const isJa = pathname === "/ja" || pathname.startsWith("/ja/");
  const basePath = isJa ? pathname.slice(3) || "/" : pathname;
  return localizeHref(targetLocale, basePath === "" ? "/" : basePath);
}

export function absoluteUrl(locale: Locale, path: string): string {
  return `${siteUrl}${localizeHref(locale, path)}`;
}

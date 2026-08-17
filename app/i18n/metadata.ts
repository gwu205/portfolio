import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import { absoluteUrl, Locale, locales, siteUrl } from "./locales";

interface BuildMetadataOptions {
  locale: Locale;
  /** Default-locale (en) path, e.g. "/" or "/projects/crowdcast". */
  path: string;
  title?: string;
  description?: string;
  /** Path to an OG image relative to the site root. */
  image?: string;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = "/opengraph-image.png",
}: BuildMetadataOptions): Metadata {
  const dict = getDictionary(locale);
  const resolvedTitle = title ?? dict.meta.siteTitle;
  const resolvedDescription = description ?? dict.meta.siteDescription;

  const languages = Object.fromEntries(
    locales.map((l) => [l, absoluteUrl(l, path)]),
  );

  return {
    metadataBase: new URL(siteUrl),
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: absoluteUrl(locale, path),
      languages: { ...languages, "x-default": absoluteUrl("en", path) },
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteTitle,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      url: absoluteUrl(locale, path),
      title: resolvedTitle,
      description: resolvedDescription,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [image],
    },
  };
}

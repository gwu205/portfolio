import type { Metadata } from "next";
import { AboutView } from "../../../components/page/about/AboutView";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildMetadata } from "../../../i18n/metadata";

const dict = getDictionary("ja");

export const metadata: Metadata = buildMetadata({
  locale: "ja",
  path: "/about",
  title: dict.about.seoTitle,
  description: dict.about.seoDescription,
});

export default function Page() {
  return <AboutView />;
}

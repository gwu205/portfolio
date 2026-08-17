import { CaseStudyView } from "@/app/components/article/CaseStudyView";
import { getProject } from "@/app/content/projects";
import { buildMetadata } from "@/app/i18n/metadata";
import type { Metadata } from "next";

const slug = "staple-lite";
const content = getProject(slug, "en");

export const metadata: Metadata = buildMetadata({
  locale: "en",
  path: `/projects/${slug}`,
  title: content.seo.title,
  description: content.seo.description,
  image: content.meta.heroImageSrc,
});

export default function Page() {
  return <CaseStudyView content={content} />;
}

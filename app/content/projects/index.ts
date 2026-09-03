import { Locale } from "@/app/i18n/locales";
import { CaseStudy } from "../types";

import { crowdcast } from "./crowdcast";
import { experienceLab } from "./experience-lab";
import { invoiceBuilder } from "./invoice-builder";
import { platformNavigation } from "./platform-navigation";
import { siteRedesign } from "./site-redesign";
import { sollectiveBiz } from "./sollective-biz";
import { staple } from "./staple";
import { stapleLite } from "./staple-lite";
import { timesheets } from "./timesheets";

export type LocalizedCaseStudy = Record<Locale, CaseStudy>;

/**
 * Showcase order on the home page. Adding a case study means adding its
 * content directory and one entry here — nothing else changes.
 */
export const projects: { slug: string; content: LocalizedCaseStudy }[] = [
  { slug: "experience-lab", content: experienceLab },
  { slug: "sollective-biz", content: sollectiveBiz },
  { slug: "timesheets", content: timesheets },
  { slug: "site-redesign", content: siteRedesign },
  { slug: "invoice-builder", content: invoiceBuilder },
  // { slug: "platform-navigation", content: platformNavigation },
  { slug: "staple-lite", content: stapleLite },
  { slug: "staple", content: staple },
  { slug: "crowdcast", content: crowdcast },
];

export function getProject(slug: string, locale: Locale): CaseStudy {
  const entry = projects.find((project) => project.slug === slug);
  if (!entry) {
    throw new Error(`Unknown project slug: ${slug}`);
  }
  return entry.content[locale];
}

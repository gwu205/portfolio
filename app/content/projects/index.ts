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

interface ProjectEntry {
  slug: string;
  content: LocalizedCaseStudy;
  /**
   * Withhold from the home page showcase while keeping the case study's own
   * route working. Set this rather than removing the entry — `getProject`
   * resolves route params against this same list, so an unregistered slug
   * fails the static export of `/projects/<slug>` instead of just hiding it.
   */
  hiddenFromHome?: boolean;
}

/**
 * Every case study, in home page showcase order. Adding one means adding its
 * content directory and one entry here — nothing else changes.
 */
export const projects: ProjectEntry[] = [
  { slug: "experience-lab", content: experienceLab },
  { slug: "sollective-biz", content: sollectiveBiz },
  { slug: "timesheets", content: timesheets },
  { slug: "site-redesign", content: siteRedesign },
  { slug: "invoice-builder", content: invoiceBuilder },
  { slug: "platform-navigation", content: platformNavigation, hiddenFromHome: true },
  { slug: "staple-lite", content: stapleLite },
  { slug: "staple", content: staple },
  { slug: "crowdcast", content: crowdcast },
];

/** The subset the home page actually lists. */
export const showcaseProjects = projects.filter(
  (project) => !project.hiddenFromHome,
);

export function getProject(slug: string, locale: Locale): CaseStudy {
  const entry = projects.find((project) => project.slug === slug);
  if (!entry) {
    throw new Error(`Unknown project slug: ${slug}`);
  }
  return entry.content[locale];
}

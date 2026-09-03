"use client";

import { projects } from "@/app/content/projects";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { localizeHref } from "@/app/i18n/locales";
import { ParallaxCircles } from "../../common/ParallaxCircles";
import { ScrollFadeIn } from "../../common/ScrollFadeIn";
import { WorkCard } from "../../common/WorkCard";

// Vertical gap between rows, applied to every row after the first. Lives
// here (not inside WorkCard) because it's a property of how this list
// spaces its own items, not of any one card; left/right alignment, by
// contrast, stays inside WorkCard since it's about that card's own
// position within its row.
const CASCADE_GAP_CLASS = "mt-12 sm:mt-16 md:mt-24";

export const Works = () => {
  const { locale } = useLocale();

  return (
    <>
      <div className="relative flex flex-col px-8 py-16 md:px-16 md:py-32 lg:px-24">
        {projects.map(({ slug, content }, index) => {
          const study = content[locale];
          return (
            <ScrollFadeIn
              key={slug}
              index={index}
              className={index > 0 ? CASCADE_GAP_CLASS : undefined}
            >
              <WorkCard
                title={study.card.title}
                client={study.card.client ?? study.meta.clientName}
                img_src={study.card.imgSrc}
                video_src={study.card.videoSrc}
                link={localizeHref(locale, `/projects/${slug}`)}
                index={index}
              />
            </ScrollFadeIn>
          );
        })}
      </div>

      <ParallaxCircles
        circles={[
          {
            position: "top",
            side: "right",
            offset: "-30%",
            speed: 0.3,
            zIndex: -1,
          },
          {
            position: "bottom",
            side: "left",
            offset: "-20%",
            speed: 0.3,
            zIndex: -1,
          },
        ]}
      />
    </>
  );
};

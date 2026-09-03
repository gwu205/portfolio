"use client";

import { Blocks, Bot, Gem, Paintbrush, Unplug } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { InfoCard } from "../../common/InfoCard";

// Proper nouns (client/employer names) — kept out of the i18n dictionary
// and hardcoded here instead, per the convention documented at the top of
// ja.ts (brand names stay identical across locales, read as brand voice
// rather than information) — same treatment Ticker.tsx already gives
// "Geoffrey Wu".
const BRANDS = [
  "Sollective",
  "FreelanceOS",
  "BaseMe",
  "Publicis Groupe",
  "Saya University",
  "CrowdCast",
  "Staple",
  "Wisenet",
];

const DIVIDER_CLASS = "w-full h-px bg-[#4E3960]/20";

// The home page's compact "About" teaser: badge, sticky namecard, and a
// reused/re-themed version of the old Skills section's focus cards — see
// the redesign plan for why this replaces Skills/Ticker/Experience
// wholesale rather than sitting alongside them.
export const About = () => {
  const { dict } = useLocale();
  const home = dict.home;

  const focusCards = [
    { icon: Blocks, ...home.skills.designSystems },
    { icon: Paintbrush, ...home.skills.productUi },
    { icon: Unplug, ...home.skills.designEngineering },
    { icon: Gem, ...home.skills.landingPages },
    { icon: Bot, ...home.skills.aiWorkflows },
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-8 pt-40 pb-40 md:pb-40">
      <div className="flex justify-center pb-20 md:pb-40">
        <Image
          src="/images/openforwork.svg"
          alt={home.openForWorkAlt}
          width={82}
          height={82}
          className="motion-safe:animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left: sticky namecard. Sits at the top of its sticky column,
            not vertically centered, matching the reference design. top-10
            and this md:h-screen/z-10 combo are proven in production
            already, by the old Works.tsx sidebar against this same fixed
            Header (type="minimal", fixed top-0 z-20). */}
        <div className="md:w-2/5 w-full md:sticky md:top-20 md:h-fit z-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="relative shrink-0">
                <Image
                  src="/images/avatar.jpeg"
                  alt={dict.footer.avatarAlt}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#BFFF00] rounded-full border-4 border-[#DAD6DB]">
                  <div
                    className="absolute inset-0 bg-[#BFFF00] rounded-full motion-safe:animate-ping"
                    style={{ animationDuration: "4s" }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[#4E3960] text-2xl">
                  Geoffrey Wu
                </h3>
                <h4 className="text-[#4E3960] text-lg">
                  {home.jobTitle}
                </h4>
              </div>
            </div>
            <div className={DIVIDER_CLASS} />
          </div>
        </div>

        {/* Right: normal flow, scrolls past the sticky left column. */}
        <div className="md:w-3/5 w-full flex flex-col gap-10">
          <h2 className="text-[#4E3960] md:text-[40px] text-3xl tracking-[-0.02em] leading-[1.2]">
            {home.aboutIntro}
          </h2>
          <div className={DIVIDER_CLASS} />

          <div className="flex flex-col gap-4">
            <span className="u-stack-label text-[#4E3960] opacity-50">
              {home.aboutBrandsLabel}
            </span>
            <p className="text-[#4E3960] text-2xl leading-relaxed">
              {BRANDS.join(", ")}
            </p>
          </div>
          <div className={DIVIDER_CLASS} />

          <div className="flex flex-col gap-4">
            <span className="u-stack-label text-[#4E3960] opacity-50">
              {home.aboutFocusLabel}
            </span>
            <div className="flex flex-col">
              {focusCards.map((card) => (
                <InfoCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  variant="light"
                />
              ))}
            </div>
          </div>
          <div className={DIVIDER_CLASS} />
        </div>
      </div>
    </div>
  );
};

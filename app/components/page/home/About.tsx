"use client";

import { Blocks, Bot, Gem, Paintbrush, Unplug } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { InfoCard } from "../../common/InfoCard";

// Brand names stay identical across locales, so they're not in the dictionary.
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

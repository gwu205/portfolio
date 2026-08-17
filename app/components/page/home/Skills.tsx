"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import { localizeHref } from "@/app/i18n/locales";
import {
  ArrowRightIcon,
  Blocks,
  Bot,
  Gem,
  Paintbrush,
  Unplug,
} from "lucide-react";
import { InfoCard } from "../../common/InfoCard";
import { TransitionLink } from "../../common/TransitionLink";

export const Skills = () => {
  const { locale, dict } = useLocale();
  const skills = dict.home.skills;

  const cards = [
    { icon: Blocks, ...skills.designSystems },
    { icon: Paintbrush, ...skills.productUi },
    { icon: Unplug, ...skills.designEngineering },
    { icon: Gem, ...skills.landingPages },
    { icon: Bot, ...skills.aiWorkflows },
  ];

  return (
    <div className="flex md:flex-row flex-col justify-center items-start w-full pt-8 gap-8">
      <div className="md:w-1/2 w-full bg-[#f7f4f8] p-12 text-[#4e3960] text-4xl font-semibold rounded-[32px]">
        {dict.home.focusAreas}
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-6 mt-8">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
        <TransitionLink
          href={`${localizeHref(locale, "/about")}#stack`}
          className="flex items-center justify-between gap-8 p-6 border-2 border-white bg-transparent rounded-[32px] hover:bg-white/10 transition-colors group"
        >
          <span className="text-2xl font-semibold from-white to-white bg-gradient-to-r bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-orange-300 transition-all duration-500">
            {dict.home.stackCta}
          </span>
          <ArrowRightIcon className="w-6 h-6 text-white group-hover:text-purple-200 transition-all duration-500" />
        </TransitionLink>
      </div>
    </div>
  );
};

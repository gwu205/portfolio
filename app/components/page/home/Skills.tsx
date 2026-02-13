"use client";

import { Blocks, Bot, Gem, Paintbrush, Unplug } from "lucide-react";
import { InfoCard } from "../../common/InfoCard";

export const Skills = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-start w-full pt-8 gap-8">
      <div className="md:w-1/2 w-full bg-[#f7f4f8] p-12 text-[#4e3960] text-4xl font-semibold rounded-[32px]">
        Focus Areas
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-6 mt-8">
        <InfoCard
          icon={Blocks}
          title="Design Systems & UI Libraries"
          description="Scalable component systems that keep teams aligned and interfaces consistent."
        />
        <InfoCard
          icon={Paintbrush}
          title="Product UI & Interaction"
          description="Clear, interaction-rich interfaces for complex B2B and multi-lingual workflows."
        />
        <InfoCard
          icon={Unplug}
          title="Design-Engineering Collaboration"
          description="Design that speaks code - from tokens and specs to production-ready UI."
        />
        <InfoCard
          icon={Gem}
          title="Conversion Landing Pages"
          description="Conversion-focused pages that balance narrative, clarity, and performance."
        />
        <InfoCard
          icon={Bot}
          title="AI-Powered Workflows"
          description="Interfaces and flows that integrate AI to streamline decisions and user tasks."
        />
      </div>
    </div>
  );
};

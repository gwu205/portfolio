"use client";

import { RichText } from "@/app/components/article/RichText";
import { useLocale } from "@/app/i18n/LocaleProvider";

interface ExperienceProps {
  yearsSince2017: number;
}

export const Experience = ({ yearsSince2017 }: ExperienceProps) => {
  const { dict } = useLocale();
  const home = dict.home;

  const roles = [
    { label: home.presentLabel, text: home.presentRole, indent: "pl-[8%]" },
    { label: home.role2020Label, text: home.role2020, indent: "pl-[16%]" },
    { label: home.role2017Label, text: home.role2017, indent: "pl-[24%]" },
    { label: home.role2015Label, text: home.role2015, indent: "pl-[32%]" },
  ];

  return (
    <div className="max-w-5xl px-8 mx-auto flex flex-col gap-10 font-light">
      <h2 className="u-stack-label">
        <span>{home.experienceHeading}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h2>
      <p className="text-white">
        <RichText
          text={home.experienceIntro.replace("{years}", String(yearsSince2017))}
        />
      </p>
      {roles.map((role) => (
        <div key={role.label} className="flex flex-col gap-10">
          <h6 className={`${role.indent} u-stack-label`}>
            <span>{role.label}</span>
            <span className="ml-4 flex-1 h-px bg-white"></span>
          </h6>
          <p className={`${role.indent} text-white`}>{role.text}</p>
        </div>
      ))}
    </div>
  );
};
